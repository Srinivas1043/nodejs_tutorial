const os = require('os');
const { memoryUsage } = require('process');

//Platform
console.log(os.platform());

//CPU Arch

console.log(os.arch());

//CPU core info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Used memory
console.log(os.totalmem() - os.freemem());

//Home directory
console.log(os.homedir());

//Up time
console.log(os.uptime());