# John Titor

John Titor is a zero-dependency JavaScript library for handling date-time string formatting [the PHP way](https://www.php.net/manual/en/datetime.format.php). Named after time traveler [`TimeTravel_0`](https://en.wikipedia.org/wiki/John_Titor), it has been designed to both make date string formatting easier in-general as well as make PHP developers feel more at-home in the JavaScript ecosystem.

## Example Usage

```js
// By default it will format the current time:

const currentYear  = titor('Y');       // '2000'
const shortYear    = titor('y');       // '00'

const americanDate = titor('m/d/Y');   // '11/02/2000'
const betterDate   = titor('Y-m-d');   // '2000-11-02'

const wordDate     = titor('F jS, Y'); // 'November 2nd, 2000'

const dayAndTime   = titor('l g:i a'); // 'Thursday 3:04 am'

// If you'd like, you can pass in a specific time to format:

const date = new Date('2036-03-14 16:05'); // Date to try out!

const americanizeDate = titor('m/d/Y',             date); // '03/14/2036'
const unixTimestamp   = titor('U',                 date); // '2089145100'
const bigDateTime     = titor('l F jS, Y @ g:i A', date); // 'Friday March 14th, 2036 @ 4:05 PM'

// You can include words, phrases, and more in the output;
// be mindful that you escape any letters that overlap
// this library's legend characters! Use a backslash: \

const formattedOutput = titor(String.raw`

\H\e\l\l\o, \W\o\r\l\d!
=============

\D\a\t\e \I\n\f\o:
----------

\D\a\y:   l
\M\o\n\t\h: F
\Y\e\a\r:  Y
\U\n\ix:  U

`, date);

// formattedOutput would contain the following (sans comments):
/*


Hello, World!
=============

Date Info:
----------

Day:   Friday
Month: March
Year:  2036
Unix:  2089145100


*/
```

## Installation

(Instructions coming soon.)

## Quick Legend

### Year

* `Y`: four-digit year number
* `y`: two-digit year number
* `L`: 1 if a leap year, 0 if not

### Month

* `m`: month number (with leading zero)
* `n`: month number (without leading zero)
* `F`: full textual name of the month
* `M`: three-letter textual name of month
* `t`: number of days in the month

### Day

* `d`: day of month (with leading zero)
* `j`: day of month (without leading zero)
* `l`: full textual day of the week
* `D`: three-letter textual day of the week

### Hour

* `h`: 12-hour clock hour (with leading zero)
* `g`: 12-hour clock hour (without leading zero)
* `a`: lower-case am or pm
* `A`: upper-case AM or PM
* `H`: 24-hour clock hour (with leading zero)
* `G`: 24-hour clock hour (without leading zero)
* `I`: 1 if in daylight savings time, 0 if not

### Minute

* `i`: minutes (with leading zero)

### Second

* `s`: seconds (with leading zero)
* `u`: microseconds
* `U`: number of seconds since the Unix Epoch

## Complete Legend

| Format | Description                                                                                   |
|--------|-----------------------------------------------------------------------------------------------|
| d      | The day of the month (from 01 to 31)                                                          |
| D      | A textual representation of a day (three letters)                                             |
| j      | The day of the month without leading zeros (1 to 31)                                          |
| l      | A full textual representation of a day                                                        |
| N      | The ISO-8601 numeric representation of a day (1 for Monday, 7 for Sunday)                     |
| S      | The English ordinal suffix for the day of the month (2 characters st, nd, rd or th. Works well with j) |
| w      | A numeric representation of the day (0 for Sunday, 6 for Saturday)                            |
| z      | The day of the year (from 0 through 365)                                                      |
| W      | The ISO-8601 week number of year (weeks starting on Monday)                                   |
| F      | A full textual representation of a month (January through December)                           |
| m      | A numeric representation of a month (from 01 to 12)                                           |
| M      | A short textual representation of a month (three letters)                                     |
| n      | A numeric representation of a month, without leading zeros (1 to 12)                          |
| t      | The number of days in the given month                                                         |
| L      | Whether it's a leap year (1 if it is a leap year, 0 otherwise)                                |
| o      | The ISO-8601 year number                                                                      |
| Y      | A four digit representation of a year                                                         |
| y      | A two digit representation of a year                                                          |
| a      | Lowercase am or pm                                                                            |
| A      | Uppercase AM or PM                                                                            |
| B      | Swatch Internet time (000 to 999)                                                             |
| g      | 12-hour format of an hour (1 to 12)                                                           |
| G      | 24-hour format of an hour (0 to 23)                                                           |
| h      | 12-hour format of an hour (01 to 12)                                                          |
| H      | 24-hour format of an hour (00 to 23)                                                          |
| i      | Minutes with leading zeros (00 to 59)                                                         |
| s      | Seconds, with leading zeros (00 to 59)                                                        |
| u      | Microseconds (added in PHP 5.2.2)                                                             |
| e      | The timezone identifier (Examples: UTC, GMT, Atlantic/Azores)                                 |
| I      | Whether the date is in daylight savings time (1 if Daylight Savings Time, 0 otherwise)        |
| O      | Difference to Greenwich time (GMT) in hours (Example: +0100)                                  |
| P      | Difference to Greenwich time (GMT) in hours:minutes (added in PHP 5.1.3)                      |
| T      | Timezone abbreviations (Examples: EST, MDT)                                                   |
| Z      | Timezone offset in seconds. The offset for timezones west of UTC is negative (-43200 to 50400)|
| c      | The ISO-8601 date (e.g. 2013-05-05T16:34:42+00:00)                                            |
| r      | The RFC 2822 formatted date (e.g. Fri, 12 Apr 2013 12:01:05 +0200)                            |
| U      | The seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                                |

## Incomplete Features

There are thirty-seven (37) internal methods required to match the formatting features supplied by PHP. Some features have not yet reached parity with its PHP counterpart:

* ❌ `e`
* ❌ `O`
* ❌ `P`
* ❌ `T`
* ❌ `Z`
* ❌ `c`
* ❌ `r`

Most of the above provide some reasonable output in the mean-time, but these will require more work to better handle timezone cases as well as behave more 1:1 with PHP date formatting.

## Author

My name is [Warren Uhrich](https://warren.codes)! I'm a human person; instructor; and world wide web developer from Canada. Despite its potentially confusing syntax, I've always enjoyed the flexibility of PHP's date formatting. The ability to prepare a simple template out of a set of characters is powerful!

My goal when building `john-titor` was to develop a zero-dependancy library that is easy to use and brings the aforementioned power to JavaScript. Wield it wisely!
