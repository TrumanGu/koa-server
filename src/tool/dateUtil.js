import moment from 'moment'

/**
 * 取得当前日期
 * @return 当前日期。如：2012-11-09
 */
export function currentDate () {
  return moment().format('YYYY-MM-DD')
}

/**
 * 取得当前日期时间
 * @return 当前日期。如：2012-11-09 17:04:49
 */
export function currentDateTime () {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 取得当前时间
 * @return 当前日期。如：17:04:49
 */
export function currentTime () {
  return moment().format('HH:mm:ss')
}

/**
 * 取得指定月的第一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-02-01。
 */
export function monthStart (year, month) {
  month = month.length < 2 ? `0${month}` : month
  //   return moment(`${year}-${month}-01`, 'YYYY-MM-DD').format('YYYY-MM-DD')
  return `${year}-${month}-01`
}

/**
 * 取得指定月的前一个月第一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-01-01。
 */
export function preMonthStart (year, month) {
  month = month.length < 2 ? `0${month}` : month
  return moment(`${year}-${month}-01`, 'YYYY-MM-DD').subtract(1, 'months').format('YYYY-MM-DD')
}

/**
 * 取得指定月的前一个月最后一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-01-31。
 */
export function preMonthEnd (year, month) {
  month = month.length < 2 ? `0${month}` : month
  // 上一个月
  let preMonth = moment(`${year}-${month}`, 'YYYY-MM').subtract(1, 'months')
  // 目标年月有多少天
  let day = preMonth.daysInMonth()
  return preMonth.format('YYYY-MM') + `-${day}`
}

/**
 * 取得指定月的最后一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-02-29。
 */
export function monthEnd (year, month) {
  month = month.length < 2 ? `0${month}` : month
  //   moment("2012-02", "YYYY-MM").daysInMonth() // 29
  //   moment("2012-01", "YYYY-MM").daysInMonth() // 31
  // 目标月有多少天
  const day = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth()
  return `${year}-${month}-${day}`
}

/**
 * 取得指定月的下个月的第一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-03-01。
 */
export function nextMonthStart (year, month) {
  month = month.length < 2 ? `0${month}` : month
  // 下一个月
  let nextMonth = moment(`${year}-${month}`, 'YYYY-MM').add(1, 'months')
  return nextMonth.format('YYYY-MM') + `-01`
}

/**
 * 取得指定月的下个月的最后一天
 * @param year 年。如：2012。
 * @param month 月。如：02或2。
 * @return 日期。如：2012-03-31。
 */
export function nextMonthEnd (year, month) {
  month = month.length < 2 ? `0${month}` : month
  // 下一个月
  let nextMonth = moment(`${year}-${month}`, 'YYYY-MM').add(1, 'months')
  // 目标月有多少天
  let day = nextMonth.daysInMonth()
  return nextMonth.format('YYYY-MM') + `-${day}`
}

/**
 * 取得指定月的上个月
 * @param year 年。如：2012。
 * @param month月。如：02或2。
 * @return 日期。如：2012-01。
 */
export function prevMonth (year, month) {
  month = month.length < 2 ? `0${month}` : month
  // 上一个月
  let preMonth = moment(`${year}-${month}`, 'YYYY-MM').subtract(1, 'months')
  return preMonth.format('YYYY-MM')
}

/**
 * 取得指定月的上个月
 * @param year 年。如：2012。
 * @param month月。如：02或2。
 * @return 日期。如：2012-01。
 */
export function getNextMonth (year, month) {
  month = month.length < 2 ? `0${month}` : month
  // 下一个月
  let nextMonth = moment(`${year}-${month}`, 'YYYY-MM').add(1, 'months')
  return nextMonth.format('YYYY-MM')
}

/**
 * 取得指定日期的年
 * @param date 指定日期（如：2012-02-11）
 * @return 年（如：2012）
 */
export function yearOfDate (date) {
  // 取得指定日期的年
  return moment(date, 'YYYY-MM-DD').get('year')
}

/**
 * 取得指定日期的月
 * @param date 指定日期（如：2012-02-11）
 * @return 月（如：02）
 */
export function monthOfDate (date) {
  // moment().get('month');  // 0 to 11
  // 取得指定日期的月,需要加1
  return moment(date, 'YYYY-MM-DD').get('month') + 1
}

/**
 * 取得指定日期的日
 * @param date 指定日期（如：2012-02-11）
 * @return 月（如：02）
 */
export function dayOfDate (date) {
  // 取得指定日期的月
  return moment(date, 'YYYY-MM-DD').get('date')
}

/**
 * 取得当前年
 * @return 年（如：2012）
 */
export function year () {
  return moment().get('year')
}

/**
 * 取得当前月
 * @return 月（如：02）
 */
export function month () {
  // moment().get('month');  // 0 to 11
  return moment().get('month') + 1
}

/**
 * 取得当前日
 * @return 日（如：02）
 */
export function day () {
  return moment().get('date')
}

/**
 * 取得指定日期的年月
 * @param date 指定日期（如：2012-02-11）
 * @return 年月（如：2012-02）
 */
export function ymOfDate (date) {
  return moment(date, 'YYYY-MM-DD').format('YYYY-MM')
}

/**
 * 取得当前年月
 * @return 年月（如：2012-02）
 */
export function ym () {
  return moment().format('YYYY-MM')
}

/**
 * 取得当前时间戳
 * @return 时间戳（如：1502162703）
 */
export function timestamp () {
  return moment().format('X')
}
