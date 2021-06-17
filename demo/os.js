// Get info about OS(Operation System of user)
const os = require('os')

console.log('Operation System: ', os.platform());

console.log('Architecture of processor: ', os.arch());
console.log('Info about processor: ', os.cpus());

console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());

console.log('Home directory: ', os.homedir());

// how many secs computer is working
console.log('Working: ', os.uptime());


