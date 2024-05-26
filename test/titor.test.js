const titor = require('../lib/titor');

// Introduction
console.log();
console.log('\x1b[7mTitor Test Suite is now Running.\x1b[0m');
console.log();

// Test variables
let description, actual, expected, comparison;

// Test data
const date = new Date('1982-07-09 5:00');

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

// Format pass and failure strings
const formattedPasses   = passes.map(pass      => `\t• \x1b[1m\x1b[32m✔ Passed: \x1b[0m\x1b[32m${pass}\x1b[0m`);
const formattedFailures = failures.map(failure => `\t• \x1b[1m\x1b[31m❌ Failed: \x1b[0m\x1b[31m${failure.description}\x1b[0m`+
                                                  `\r\n\t\t\x1b[1mActual:   \x1b[0m\x1b[33m${failure.actual}\x1b[0m`+
                                                  `\r\n\t\t\x1b[1mExpected: \x1b[0m\x1b[33m${failure.expected}\x1b[0m`);

// Display test status information
if(formattedPasses.length > 0) {
    console.log();
    console.log('\x1b[4mPassing Tests:\x1b[0m');
    for(const pass of formattedPasses) console.log(pass);
    console.log();
}
if(formattedFailures.length > 0) {
    console.log();
    console.log('\x1b[4mFailing Tests:\x1b[0m');
    for(const failure of formattedFailures) console.log(failure);
    console.log();
}

// Exit with failure or success code
if(failures.length > 0) process.exit(1);
else process.exit();
