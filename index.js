/**
 *
 * Entry point for library.
 *
 */

const timeChars = {
  /**
   * Day of the month (01-31)
   */
  d: function(date) {
    const dayOfMonth = date.getDate();
    return dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  },
  /**
   * Day of week (three letters, like "Mon")
   */
  D: function(date) {
    switch(date.getDay()) {
      case 0: return 'Sun';
      case 1: return 'Mon';
      case 2: return 'Tue';
      case 3: return 'Wed';
      case 4: return 'Thu';
      case 5: return 'Fri';
      case 6: return 'Sat';
    }
  },
  /**
   * Day of the month (1-31)
   */
  j: function(date) { return String(date.getDate()); },
  /**
   * Day of week (full name, like "Monday")
   */
  l: function(date) {
    switch(date.getDay()) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  },
  /**
   * Day of week in ISO-8601 (1-7)
   */
  N: function(date) { return date.getDay() + 1; },
  S: function(date) {
    const dayOfMonth = String(date.getDate());
    const lastDigit = dayOfMonth[dayOfMonth.length - 1];
    switch(lastDigit) {
      case '0': return 'th';
      case '1': return dayOfMonth === '11' ? 'th' : 'st';
      case '2': return dayOfMonth === '12' ? 'th' : 'nd';
      case '3': return dayOfMonth === '13' ? 'th' : 'rd';
      default: return 'th';
    }
  },
  /**
   * Day of the week (0-6)
   */
  w: function(date) { return String(date.getDay()); },
  z: function(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return String(day);
  },
  W: function(date) {},
  F: function(date) {},
  m: function(date) {},
  M: function(date) {},
  n: function(date) {},
  t: function(date) {},
  L: function(date) {},
  o: function(date) {},
  Y: function(date) {},
  y: function(date) {},
  a: function(date) {},
  A: function(date) {},
  B: function(date) {},
  g: function(date) {},
  G: function(date) {},
  h: function(date) {},
  H: function(date) {},
  i: function(date) {},
  s: function(date) {},
  u: function(date) {},
  e: function(date) {},
  I: function(date) {},
  O: function(date) {},
  P: function(date) {},
  T: function(date) {},
  Z: function(date) {},
  c: function(date) {},
  r: function(date) {},
  U: function(date) {},
};

// Starting by getting the logic down...
function titor(format='', date = new Date()) {
  let validDate = false;
  let validFormat = false;

  if(typeof date === 'object' && date instanceof Date) validDate = true;
  if(typeof format === 'string') validFormat = true;

  if(!validDate) console.log('ERR: titor encountered invalid date.');
  if(!validFormat) console.log('ERR: titor encountered invalid format.');
};

titor(String.raw`\hello`);

