function fromSecToMin(sec, print = false) {
    var minutes = {
        fullmins: null,
        seconds: null
    };
    minutes.fullmins = (sec / 60).toFixed(0);
    minutes.seconds = sec % 60;
    if (print) {
        console.log(minutes.fullmins + 'm ' + minutes.seconds + 's');
    }
    return minutes;

}

function fromSecToHour(sec, print = false) {
    var hour = {
        fullhours: null,
        minutes: null,
        seconds: null
    };
    var mins = fromSecToMin(sec);
    hour.fullhours = (mins.fullmins / 60).toFixed(0);
    hour.minutes = mins.fullmins % 60;
    hour.seconds = mins.seconds;
    if (print) {
        console.log(hour.fullhours + 'h ' + hour.minutes + 'm ' + hour.seconds + 's');
    }

    return hour;

}
exports.toHour = fromSecToHour;
exports.toMin = fromSecToMin;