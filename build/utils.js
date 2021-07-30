const path = require('path');
const os = require('os');
const resolve = (str) => {
    return path.resolve(__dirname, '..', str);
}

const getLocalIpSync = () => {
    let host = '127.0.0.1';
    const ifaces = os.networkInterfaces();
    for (const dev in ifaces) {
        ifaces[dev].forEach(function (details) {
            if (details.family === 'IPv4' && details.address.indexOf('192.168') >= 0) {
                host = details.address;
            }
        });
    }

    return host;
};

let appConfig = {};

try{
    appConfig = require(resolve('app.config.js'));
}catch(error){
    console.log('加载approcess.config.js❌');
}


module.exports = {
    appConfig,
    resolve,
    host: getLocalIpSync()
}