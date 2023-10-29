
import dayjs, { TStandardFormatOptions } from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import jalaliDay from "jalaliday";
import duration from "dayjs/plugin/duration";
import  weekday from 'dayjs/plugin/weekday'

// import asd from "dayjs/plugin/arraySupport";
// import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(weekday)
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(duration);
// dayjs.extend(isLeapYear)
dayjs.extend(jalaliDay);
const reg = /(\d{4})-\d{1,2}-\d{1,2}/;
dayjs.extend((option, Dayjs) => {
  const proto = Dayjs.prototype;
  const oldParse = proto.parse;
  proto.parse = function (cfg) {
    if (cfg.date && typeof cfg.date === "string" && reg.test(cfg.date)) {
      const res = reg.exec(cfg.date);
      if (res && Number(res[1]) < 1600) cfg.jalali = true;
    }
    oldParse.bind(this)(cfg);
  };
  proto.standardFormat = function (options?: TStandardFormatOptions) {
    const {
      template = "YYYY-MM-DD",
      jalali = false,
      locale = "en",
    } = options || {};
    return this.calendar(jalali ? "jalali" : "gregory")
      .locale(locale)
      .format(template);
  };
});
// globalThis.dayjs = dayjs;
export default dayjs;
