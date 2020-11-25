type w_date = Date | string;
type Region = 'en' | 'vi';
type formatDate = 
  'YYYY-MM-DD' | 
  'DD-MM-YYYY' | 
  'MM-DD-YYYY' | 
  'DD ThMM,YYYY' | 
  'DD ThangMM,YYYY' | 
  'DD MMMM,YYYY' | 
  'DD MMM,YYYY' | 
  'WW MMM DD,YYYY' | 
  'WWWW MMMM DD,YYYY' | 
  'TT DD ThMM,YYYY' | 
  'Thu, DD ThangMM,YYYY' | 
  'hh:mm:ss' | 
  'hh:mm' | 
  'DD ThMM,YYYY hh:mm' | 
  'DD ThMM,YYYY hh:mm:ss' | 
  'DD MMM,YYYY hh:mm' | 
  'DD MMM,YYYY hh:mm:ss' | 
  'DD MMMM,YYYY hh:mm' | 
  'DD MMMM,YYYY hh:mm:ss' | 
  'WW MMM DD,YYYY hh:mm' | 
  'WW MMM DD,YYYY hh:mm:ss' | 
  'WWWW MMMM DD,YYYY hh:mm' | 
  'WWWW MMMM DD,YYYY hh:mm:ss' | 
  'DD MMMM,YYYY hh:mm' | 
  'DD MMMM,YYYY hh:mm:ss' | 
  'TT DD ThMM,YYYY hh:mm' | 
  'TT DD ThMM,YYYY hh:mm:ss' | 
  'Thu, DD ThangMM,YYYY hh:mm' | 
  'Thu, DD ThangMM,YYYY hh:mm:ss';

export declare function now(): Date;
export declare function identifyDate(date: w_date): Date;
export declare function format(date: w_date, format?: formatDate): string;
export declare function numberOfDays(date: w_date): number;
export declare function firstWeekdayInMonth(date: w_date): number;
export declare function nextMonth(date: w_date): Date;
export declare function previousMonth(date: w_date): Date;
export declare function getWeek(date: w_date): number;
export declare function checkNow(date: w_date): number;
export declare function getMonthFull(month: number, region?:Region): string;
export declare function getMonthShort(month: number, region?:Region): string;
export declare function getWeekdayFull(weekday: number, region?:Region): string;
export declare function getWeekdayShort(weekday: number, region?:Region): string;
 