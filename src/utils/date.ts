import { Dayjs } from 'dayjs';

/**
 * 获取日期字符串
 *
 */
export function getDateStr(date: Date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) date = new Date();
  return new Dayjs(date).format(format);
}
