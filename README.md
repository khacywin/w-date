# w-date
> __w-date__ is module handles with Date

### Install
```
  npm install w-date
```

### Usage 
```
  import wdate from 'w-date';
```

### Functions

###### now()
```
  wdate.now(); 
```

###### identifyDate(date)
* __date__(required) - string | object
```
  wdate.identifyDate('11/20/2020 8:30'); 
  //Returns: DateObject(): Fri Nov 20 2020 08:30:00 GMT+0700 (Indochina Time)
```

###### format(date, format='YYYY-MM-DD')
* __date__(required) - string | object
```
  wdate.format('11/20/2020 8:30'); 
  //Returns: 2020-11-20
```

###### numberOfDays(date)
* __date__(required) - string | object
```
  wdate.numberOfDays('11/20/2020 8:30'); 
  //Returns: 30
```

###### firstWeekdayInMonth(date)
* __date__(required) - string | object
```
  wdate.firstWeekdayInMonth('07/27/2020 8:30'); 
  //Returns: 3
```

###### nextMonth(date)
* __date__(required) - string | object
```
  wdate.nextMonth('07/27/2020 8:30'); 
  //Returns: 7
```

###### previousMonth(date)
* __date__(required) - string | object
```
  wdate.previousMonth('07/27/2020 8:30'); 
  //Returns: 5
```

###### getWeek(date)
* __date__(required) - string | object
```
  wdate.getWeek('07-02-2020 09:55'); 
  //Returns: 27
```

###### checkNow(date)
* __date__(required) - string | object
```
  wdate.checkNow('07-02-2020 09:55'); 
  //Returns: false
```

###### getMonthFull(month, region = 'en')
* __month__(required) - number
* __region__(optional) - 'en' | 'vi'
```
  wdate.getMonthFull(1); 
  //Returns: January
```

###### getMonthShort(month, region = 'en')
* __month__(required) - number (0-11)
* __region__(optional) - 'en' | 'vi'
```
  wdate.getMonthShort(0); 
  //Returns: Jan
```

###### getWeekdayFull(weekday, region = 'en')
* __weekday__(required) - number (1-7)
* __region__(optional) - 'en' | 'vi'
```
  wdate.getWeekdayFull(1); 
  //Returns: Monday
```

###### getWeekdayShort(weekday, region = 'en')
* __weekday__(required) - number (1-7)
* __region__(optional) - 'en' | 'vi'
```
  wdate.getWeekdayShort(1); 
  //Returns: Mon
```
