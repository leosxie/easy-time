# easy_time
easy format date (current time)eg.today 15:43  yesteday 13:43
#time的时间格式必须为10位数去除毫秒的
#install&use
  * npm install --save easy_time
  * test npm test
  * use
  
```javascript
    var et = require('easy_time');
    var ct = et((new Date().getTime())/1000);
    console.log(ct);
```
