# easy-time
easy format date (current time)eg.today 15:43  yesteday 13:43
#time的时间格式必须为10位数去除毫秒的
#install&use
  * npm install easy-time
  *使用
  
```javascript
    var et = require('easy-time');
    var ct = et((new Date().getTime())/1000);
```
  
```javascript
function (time) {
                    //时间与当前时间相差2天，显示年月日
                    //一天显示昨天 时分
                    //当天显示今天 时分
                    if (!/\d{10}/.test(time + "")) {
                        throw Error("时间格式错误");
                    }
                    var now = new Date().getTime(); //当前时间
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
                        return year + "年" + month + "月" + day + "日  " + hour + ":" + min;
                    }

                    if (now - time >= one_day) {
                        return "昨天  " + hour + ":" + min;
                    }

                    if (now - time < one_day) {
                        return "今天  " + hour + ":" + min;
                    }


                }
```
