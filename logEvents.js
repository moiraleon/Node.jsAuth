const {format} = require('date-fns');
const {v4:uuid} = require('uuid') //version:alias 

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const logEvents = async (message) =>{
    const dateTimes = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTimes}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromise.mkdir(path.join(__dirname,'logs'));
        }
       await fsPromise.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem); 
    } catch (err) {
        console.log(err);
    }
}
module.exports = logEvents;