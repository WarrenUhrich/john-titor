const titor = require('../lib/titor');

// Introduction
console.log();
console.log('\x1b[7mTitor Test Suite is now Running.\x1b[0m');
console.log();

// Test variables
let description, actual, expected, comparison;

// Test data
const date = new Date('1982-07-09 5:00'); // Friday, July 9, 1982 @ 5:00 a.m.

// Pass / failure tracking
const passes = [];
const failures = [];
const test = (description, actual, expected, comparison) => comparison ? passes.push(description) : failures.push({description, actual, expected});

// d
description = 'd provides the numerical day of the month with leading zero';
actual = titor('d', date);
expected = '09';
comparison = actual === expected;
test(description, actual, expected, comparison);

// D
description = 'D provides the textual day of the week as three letters';
actual = titor('D', date);
expected = 'Fri';
comparison = actual === expected;
test(description, actual, expected, comparison);

// j
description = 'j provides the numeric day of the month with no leading zero';
actual = titor('j', date);
expected = '9';
comparison = actual === expected;
test(description, actual, expected, comparison);

// l
description = 'l provides the textual day of the week';
actual = titor('l', date);
expected = 'Friday';
comparison = actual === expected;
test(description, actual, expected, comparison);

// N
description = 'N provides the numeric day of the week (1=Monday, 7=Sunday)';
actual = titor('N', date);
expected = '5';
comparison = actual === expected;
test(description, actual, expected, comparison);

// S
description = 'S provides the suffix for the day of the month (st, nd, rd, th) [test #1]';
actual = titor('S', date);
expected = 'th';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'S provides the suffix for the day of the month (st, nd, rd, th) [test #2]';
actual = titor('S', new Date('2024-05-11 5:00'));
expected = 'th';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'S provides the suffix for the day of the month (st, nd, rd, th) [test #3]';
actual = titor('S', new Date('2024-05-01 5:00'));
expected = 'st';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'S provides the suffix for the day of the month (st, nd, rd, th) [test #4]';
actual = titor('S', new Date('2024-05-02 5:00'));
expected = 'nd';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'S provides the suffix for the day of the month (st, nd, rd, th) [test #5]';
actual = titor('S', new Date('2024-05-03 5:00'));
expected = 'rd';
comparison = actual === expected;
test(description, actual, expected, comparison);

// w
description = 'w provides the numeric day of the week (0=Sunday, 6=Saturday)';
actual = titor('w', date);
expected = '5';
comparison = actual === expected;
test(description, actual, expected, comparison);

// z
description = 'z provides the numeric day of the year (0-365) [test #1]';
actual = titor('z', date);
expected = '189';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'z provides the numeric day of the year (0-365) [test #2]';
actual = titor('z', new Date('1982-01-01 5:00'));
expected = '0';
comparison = actual === expected;
test(description, actual, expected, comparison);

// W
description = 'W provides the ISO-8601 week number of the year (weeks starting with Monday)';
actual = titor('W', date);
expected = '27';
comparison = actual === expected;
test(description, actual, expected, comparison);

// F
description = 'F provides the textual month of the year';
actual = titor('F', date);
expected = 'July';
comparison = actual === expected;
test(description, actual, expected, comparison);

// m
description = 'm provides the numeric month of the year (01-12)';
actual = titor('m', date);
expected = '07';
comparison = actual === expected;
test(description, actual, expected, comparison);

// M
description = 'M provides the textual month of the year as three letters';
actual = titor('M', date);
expected = 'Jul';
comparison = actual === expected;
test(description, actual, expected, comparison);

// n
description = 'n provides the numeric month of the year without leading zeros';
actual = titor('n', date);
expected = '7';
comparison = actual === expected;
test(description, actual, expected, comparison);

// t
description = 't provides the number of days in the month';
actual = titor('t', date);
expected = '31';
comparison = actual === expected;
test(description, actual, expected, comparison);

// L
description = 'L provides a 1 if it is a leap year, or a 0 if it is not [Test #1]';
actual = titor('L', date);
expected = '0';
comparison = actual === expected;
test(description, actual, expected, comparison);

description = 'L provides a 1 if it is a leap year, or a 0 if it is not [Test #2]';
actual = titor('L', new Date('2024-05-25 5:00'));
expected = '1';
comparison = actual === expected;
test(description, actual, expected, comparison);

// o
description = 'o provides the ISO-8601 year number';
actual = titor('o', date);
expected = '1982';
comparison = actual === expected;
test(description, actual, expected, comparison);

// Y
description = 'Y provides the year as four digits';
actual = titor('Y', date);
expected = '1982';
comparison = actual === expected;
test(description, actual, expected, comparison);

// y
description = 'y provides the year as two digits';
actual = titor('y', date);
expected = '82';
comparison = actual === expected;
test(description, actual, expected, comparison);

// a
description = 'a provides the period of day in lowercase (am or pm)';
actual = titor('a', date);
expected = 'am';
comparison = actual === expected;
test(description, actual, expected, comparison);

// A
description = 'A provides the period of day in lowercase (am or pm)';
actual = titor('A', date);
expected = 'AM';
comparison = actual === expected;
test(description, actual, expected, comparison);

// B https://en.wikipedia.org/wiki/Swatch_Internet_Time
description = 'B provides the Swatch Internet time (000-999)';
actual = titor('B', new Date(Date.UTC(1982, 6, 9, 5, 0, 0))); // Using UTC time for this experiment
expected = '250';
comparison = actual === expected;
test(description, actual, expected, comparison);

// g
description = 'g provides the hour of the day in 12-hour (1-12)';
actual = titor('g', date);
expected = '5';
comparison = actual === expected;
test(description, actual, expected, comparison);

// G
description = 'G provides the hour of the day in 24-hour (0-23)';
actual = titor('G', date);
expected = '5';
comparison = actual === expected;
test(description, actual, expected, comparison);

// h
description = 'h provides the hour of the day in 12-hour (01-12)';
actual = titor('h', date);
expected = '05';
comparison = actual === expected;
test(description, actual, expected, comparison);

// H
description = 'H provides the hour of the day in 24-hour (00-23)';
actual = titor('H', date);
expected = '05';
comparison = actual === expected;
test(description, actual, expected, comparison);

// i
description = 'i provides the minute of the hour with leading zero';
actual = titor('i', date);
expected = '00';
comparison = actual === expected;
test(description, actual, expected, comparison);

// s
description = 's provides the second of the minute with leading zero';
actual = titor('s', date);
expected = '00';
comparison = actual === expected;
test(description, actual, expected, comparison);

// u
description = 'u provides the microseconds';
actual = titor('u', date);
expected = '000000';
comparison = actual === expected;
test(description, actual, expected, comparison);

// e
description = 'e provides the timezone identifier';
actual = titor('e', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = 'UTC';
comparison = actual === expected;
test(description, actual, expected, comparison);

// I
description = 'I provides a 1 if it is daylight savings time, or a 0 if it is not';
actual = titor('I', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '1';
comparison = actual === expected;
test(description, actual, expected, comparison);

// O
description = 'O provides difference to Greenwich time (GMT) in hours (+0000)';
actual = titor('O', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '+0000';
comparison = actual === expected;
test(description, actual, expected, comparison);

// P
description = 'P provides difference to Greenwich time (GMT) in hours and minutes (colon-separated)';
actual = titor('P', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '+00:00';
comparison = actual === expected;
test(description, actual, expected, comparison);

// T
description = 'T provides timezone abbreviation (EST)';
actual = titor('T', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = 'UTC';
comparison = actual === expected;
test(description, actual, expected, comparison);

// Z
description = 'Z provides the timezone offset in seconds (west of UTC are negative)';
actual = titor('Z', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '0';
comparison = actual === expected;
test(description, actual, expected, comparison);

// c
description = 'c provides the ISO-8601 date (1982-07-09T05:00:00+00:00)';
actual = titor('c', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '1982-07-09T05:00:00+00:00';
comparison = actual === expected;
test(description, actual, expected, comparison);

// r
description = 'r provides the RFC 2822 date (Fri, 09 Jul 1982 05:00:00 +0000)';
actual = titor('r', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = 'Fri, 09 Jul 1982 05:00:00 +0000';
comparison = actual === expected;
test(description, actual, expected, comparison);

// U
description = 'U provides the number of seconds since the Unix Epoch';
actual = titor('U', new Date(Date.UTC(1982, 6, 9, 5, 0, 0)));
expected = '395038800';
comparison = actual === expected;
test(description, actual, expected, comparison);

// Format pass and failure strings
const formattedPasses   = passes.map(pass      => `\t• \x1b[1m\x1b[32m✔ Passed: \x1b[0m\x1b[32m${pass}\x1b[0m`);
const formattedFailures = failures.map(failure => `\t• \x1b[1m\x1b[31m❌ Failed: \x1b[0m\x1b[31m${failure.description}\x1b[0m`+
                                                  `\r\n\t\t\x1b[1mActual:   \x1b[0m\x1b[33m${failure.actual}\x1b[0m`+
                                                  `\r\n\t\t\x1b[1mExpected: \x1b[0m\x1b[33m${failure.expected}\x1b[0m`);

// Display test status information
if(formattedPasses.length > 0) {
    console.log();
    console.log('\x1b[4mPassing Tests:\x1b[0m');
    console.log();
    for(const pass of formattedPasses) console.log(pass);
    console.log();
}
if(formattedFailures.length > 0) {
    console.log();
    console.log('\x1b[4mFailing Tests:\x1b[0m');
    console.log();
    for(const failure of formattedFailures) console.log(failure);
    console.log();
}

const totalTests = passes.length + failures.length;
const padding = String(totalTests).length;
console.log();
console.log('\x1b[7mTesting Complete:\x1b[0m');
console.log();
if(passes.length > 0) console.log(`\t• Tests \x1b[32mPassing: ${String(passes.length).padStart(padding, '0')}\x1b[0m/${String(totalTests).padStart(padding, '0')}`);
if(failures.length > 0) console.log(`\t• Tests \x1b[31mFailing: ${String(failures.length).padStart(padding, '0')}\x1b[0m/${String(totalTests).padStart(padding, '0')}`);
console.log();

// Exit with failure or success code
if(failures.length > 0) process.exit(1);
else process.exit();
