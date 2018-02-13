### About: 
It returns difference between client and server dates.

### Example:
```javascript
import getTimeZone from 'get-time-zone'
console.log(getTimeZone('2018-2-13 11:07:10', '2018-2-13 17:07:10')) //6
console.log(getTimeZone('2018-2-13 23:01:20', '2018-2-14 2:01:15')) //3
console.log(getTimeZone('2018-2-13 4:23:37', '2018-2-12 22:23:35')) //-6
console.log(getTimeZone(
  new Date('Tue Feb 13 2018 11:07:10 GMT+0300'), 
  new Date('Tue Feb 13 2018 11:07:10 GMT+0100')
)) // 2
```

### Params:

| # | Name | Type | Default |
| --- | --- | --- | --- |
| 1 | clientTime | string or Date |  |
| 2 | serverTime | string or Date |  |
| 3 | clientFormat | string | YYYY-MM-DD HH:mm:ss |
| 4 | serverFormat | string | YYYY-MM-DD HH:mm:ss |
