import { stringToDate } from 'string-to-date'
const format = 'YYYY-MM-DD HH:mm:ss'
/**
 * @param clientTime {String|Date}
 * @param serverTime {String|Date}
 * @param clientFormat {String}
 * @param serverFormat {String}
 * @return {number}
 */
const getTimeZone = (clientTime, serverTime, clientFormat = format, serverFormat = format) => {
  let clientDate = stringToDate(clientTime, clientFormat)
  let serverDate = stringToDate(serverTime, serverFormat)

  if (clientTime instanceof Date) {
    clientDate = clientTime
  }
  if (serverTime instanceof Date) {
    serverDate = serverTime
  }
  if (clientDate === null || serverDate === null) {
    throw new Error('Date is invalid')
  }
  const difference = (serverDate.getTime() - clientDate.getTime())
  return Math.round(difference / 60 / 60 / 1000)
}
export default getTimeZone
