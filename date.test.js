const _date = require('./index');

describe('Get month', () => {
  test('Get month full', () => {
    expect(_date.getMonthFull(0)).toBe('January');
    expect(_date.getMonthFull(11)).toBe('December');
  });

  test('Get month short', () => {
    expect(_date.getMonthShort(0)).toBe('Jan');
    expect(_date.getMonthShort(11)).toBe('Dec');
  });

  test('Get month full vietnamese', () => {
    expect(_date.getMonthFull(0, 'vi')).toBe('Tháng 1');
    expect(_date.getMonthFull(11, 'vi')).toBe('Tháng 12');
  });

  test('Get month short vietnamese', () => {
    expect(_date.getMonthShort(0, 'vi')).toBe('Th1');
  });
})

describe('Get weekday', () => {
  test('Get weekday full', () => {
    expect(_date.getWeekdayFull(1)).toBe('Monday');
    expect(_date.getWeekdayFull(1, 'vi')).toBe('Thứ hai');
  });

  test('Get month short', () => {
    expect(_date.getWeekdayShort(3)).toBe('We');
    expect(_date.getWeekdayShort(3, 'vi')).toBe('T4');
  });
})

describe('Identify date', () => {
  test('Convert string to date object YYYY-M-D', () => {
    expect(_date.identifyDate('2020-2-1').getMonth()).toBe(1);
    expect(_date.identifyDate('2020-2-1').getDate()).toBe(1);
    expect(_date.identifyDate('2020-2-1').getFullYear()).toBe(2020);
  });

  test('Convert string to date object MM-DD-YYYY', () => {
    let date = '12-01-2000';
    expect(_date.identifyDate(date).getMonth()).toBe(11);
    expect(_date.identifyDate(date).getDate()).toBe(1);
    expect(_date.identifyDate(date).getFullYear()).toBe(2000);
  });
})

describe('Format date', ()=> {
  let time = 'Wed Jul 01 2020 19:46:52 GMT+0700 (Indochina Time)';
  
  test('DD ThMM,YYYY', ()=>{
    expect(_date.format(time, 'DD ThMM,YYYY')).toBe('01 Th7,2020');
  })
  
  test('DD MMM,YYYY', ()=>{
    expect(_date.format(time, 'DD MMM,YYYY')).toBe('01 Jul,2020');
  })

  test('DD-MM-YYYY', ()=>{
    expect(_date.format(time, 'DD-MM-YYYY')).toBe('01-07-2020');
  })

  test('DD MMMM,YYYY', ()=>{
    expect(_date.format(time, 'DD MMMM,YYYY')).toBe('01 July,2020');
  })

  test('DD ThangMM,YYYY', ()=>{
    expect(_date.format(time, 'DD ThangMM,YYYY')).toBe('01 Tháng 7,2020');
  })

  test('WW MMM DD,YYYY', ()=>{
    expect(_date.format(time, 'WW MMM DD,YYYY')).toBe('We Jul 01,2020');
  })

  test('WWWW MMMM DD,YYYY', ()=>{
    expect(_date.format(time, 'WWWW MMMM DD,YYYY')).toBe('Wednesday July 01,2020');
  })

  test('TT DD ThMM,YYYY', ()=>{
    expect(_date.format(time, 'TT DD ThMM,YYYY')).toBe('T4 01 Th7,2020');
  })

  test('Thu, DD ThangMM,YYYY', ()=>{
    expect(_date.format(time, 'Thu, DD ThangMM,YYYY')).toBe('Thứ tư, 01 Tháng 7,2020');
  })
})

describe('Format time', ()=> {
   let time = '09-10-2020 09:55';
   let time_s = '09-10-2020 09:55:12';

   test('hh:mm', ()=>{
     expect(_date.format(time, 'hh:mm')).toBe('09:55');
   })

   test('hh:mm:hh', ()=>{
    expect(_date.format(time_s, 'hh:mm:ss')).toBe('09:55:12');
  })
});

test('Number of month', ()=>{
  let time = '10-23-2020 09:55';
  expect(_date.numberOfDays(time)).toBe(31);
});

test('First of month', ()=>{
  let time = '07-02-2020 09:55';
  expect(_date.firstWeekdayInMonth(time)).toBe(3);
});

test('Next month', ()=>{
  let time = '07-02-2020 09:55';
  expect(_date.nextMonth(time).getMonth()).toBe(7);
});

test('Previous month', ()=>{
  let time = '07-02-2020 09:55';
  expect(_date.previousMonth(time).getMonth()).toBe(5);
});

test('Get week', ()=>{
  let time = '02-11-2021 09:55';
  expect(_date.getWeek(time)).toBe(6);
});