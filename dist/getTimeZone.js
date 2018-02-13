'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringToDate = require('string-to-date');

var format = 'YYYY-MM-DD HH:mm:ss';
/**
 * @param clientTime {String|Date}
 * @param serverTime {String|Date}
 * @param clientFormat {String}
 * @param serverFormat {String}
 * @return {number}
 */
var getTimeZone = function getTimeZone(clientTime, serverTime) {
  var clientFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : format;
  var serverFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : format;

  var clientDate = (0, _stringToDate.stringToDate)(clientTime, clientFormat);
  var serverDate = (0, _stringToDate.stringToDate)(serverTime, serverFormat);

  if (clientTime instanceof Date) {
    clientDate = clientTime;
  }
  if (serverTime instanceof Date) {
    serverDate = serverTime;
  }
  if (clientDate === null || serverDate === null) {
    throw new Error('Date is invalid');
  }
  var difference = serverDate.getTime() - clientDate.getTime();
  return Math.round(difference / 60 / 60 / 1000);
};
exports.default = getTimeZone;