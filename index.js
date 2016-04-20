var i18n = require("i18n");
i18n.configure({
    locales:['en', 'zh_CN'],
    directory: __dirname + '/locales'
});
function easyTime(time) {
    if (!/\d{10}/.test(time + "")) {
        throw Error("must be long time with 11 numbers");
    }
    var now = new Date().getTime(); //current time
    var time = time * 1000;
    var time_date = new Date(time);
    var year = time_date.getFullYear();
    var month = time_date.getMonth() + 1;
    var day = time_date.getDate();

    var hour = time_date.getHours();
    var min = time_date.getMinutes();

    var one_day = 24 * 60 * 60 * 1000;

    if (day < 10) {
        day = "0" + day;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (now - time >= 2 * one_day) {
        return year + ":" + month + ":" + day + " " + hour + ":" + min;
    }

    if (now - time >= one_day) {
        return i18n.__('yestoday')+" " + hour + ":" + min;
    }

    if (now - time < one_day) {
        return i18n.__('today')+" "  + hour + ":" + min;
    }


}
module.exports = easyTime;
