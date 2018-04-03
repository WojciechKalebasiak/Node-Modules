var os = require('os');
var fromSec = require('./fromSec');

function getOSinfo() {
    var type = os.type();
    switch (type) {
        case 'Darwin':
            {
                console.log('System: macOS');
                break;
            }
        case 'Windows_NT':
            {
                console.log('System: Windows');
                break;
            }
        case 'Linux':
            {
                console.log('System: Linux');
                break;
            }
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var time = os.uptime();
    var username = os.userInfo().username;
    var homedir = os.userInfo().homedir;
    console.log('Release: ' + release);
    console.log('CPU Model: ' + cpu);
    if (time < 3600) {
        process.stdout.write('Uptime: ');
        fromSec.toMin(time.toFixed(0), true);
    } else if (time >= 3600) {
        process.stdout.write('Uptime: ');
        fromSec.toHour(time.toFixed(0), true);
    }
    console.log('Username: ' + username);
    console.log('Homedir: ' + homedir);

}
exports.print = getOSinfo;