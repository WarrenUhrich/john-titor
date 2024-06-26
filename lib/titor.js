{
    /**
     * John Titor
     * 
     * @description John Titor is a zero-dependency JavaScript library for handling date-time string formatting the PHP way.
     * @author Warren Uhrich
     * @link https://github.com/WarrenUhrich/john-titor
     */

    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const formatFunctions = {
        d: (date) => String(date.getDate()).padStart(2, '0'),
        D: (date) => daysShort[date.getDay()],
        j: (date) => String(date.getDate()),
        l: (date) => daysLong[date.getDay()],
        N: (date) => date.getDay() === 0 ? 7 : date.getDay(),
        S: (date) => {
            const day = date.getDate();
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
            }
        },
        w: (date) => String(date.getDay()),
        z: (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000) - 1,
        W: (date) => {
            const target = new Date(date.valueOf());
            const dayNr = (date.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            const firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() !== 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - target) / 604800000);
        },
        F: (date) => monthsLong[date.getMonth()],
        m: (date) => String(date.getMonth() + 1).padStart(2, '0'),
        M: (date) => monthsShort[date.getMonth()],
        n: (date) => String(date.getMonth() + 1),
        t: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        L: (date) => ((date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || date.getFullYear() % 400 === 0) ? '1' : '0',
        o: (date) => {
            const target = new Date(date.valueOf());
            target.setDate(target.getDate() - ((date.getDay() + 6) % 7) + 3);
            return target.getFullYear();
        },
        Y: (date) => String(date.getFullYear()),
        y: (date) => String(date.getFullYear()).slice(-2),
        a: (date) => date.getHours() >= 12 ? 'pm' : 'am',
        A: (date) => date.getHours() >= 12 ? 'PM' : 'AM',
        // Credit to RobG; https://stackoverflow.com/questions/14988101/get-swatch-internet-time-using-javascript-and-php#answer-57300898
        B: (date) => String(((+date + 3.6e6) % 8.64e7) / 8.64e4),
        g: (date) => String(date.getHours() % 12 || 12),
        G: (date) => String(date.getHours()),
        h: (date) => String(date.getHours() % 12 || 12).padStart(2, '0'),
        H: (date) => String(date.getHours()).padStart(2, '0'),
        i: (date) => String(date.getMinutes()).padStart(2, '0'),
        s: (date) => String(date.getSeconds()).padStart(2, '0'),
        u: (date) => String(date.getMilliseconds() * 1000).padStart(6, '0'),
        e: (date) => new Intl.DateTimeFormat('en', { timeZoneName: 'long' }).formatToParts(date).find(part => part.type === 'timeZoneName').value,
        I: (date) => {
            const DST = (new Date(date.getFullYear(), 6, 1).getTimezoneOffset() < new Date(date.getFullYear(), 0, 1).getTimezoneOffset());
            return DST ? '1' : '0';
        },
        O: (date) => {
            const offset = date.getTimezoneOffset();
            const sign = offset < 0 ? '+' : '-';
            const absOffset = Math.abs(offset);
            return `${sign}${String(Math.floor(absOffset / 60)).padStart(2, '0')}${String(absOffset % 60).padStart(2, '0')}`;
        },
        P: (date) => {
            const offset = date.getTimezoneOffset();
            const sign = offset < 0 ? '+' : '-';
            const absOffset = Math.abs(offset);
            return `${sign}${String(Math.floor(absOffset / 60)).padStart(2, '0')}:${String(absOffset % 60).padStart(2, '0')}`;
        },
        T: (date) => {
            try {
                return date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
            } catch (e) {
                return 'UTC';
            }
        },
        Z: (date) => String(-date.getTimezoneOffset() * 60),
        c: (date) => date.toISOString(),
        r: (date) => date.toUTCString(),
        U: (date) => String(Math.floor(date.getTime() / 1000)),
    };

    /**
     * Titor
     * 
     * @param {string} format - String with format characters
     * @param {Date} date - (Optional) A date to format as a string
     * @returns {string} - Formatted date string
     */
    function titor(format='', date = new Date()) {
        let validDate = false;
        let validFormat = false;

        if(typeof date === 'object' && date instanceof Date) validDate = true;
        if(typeof format === 'string') validFormat = true;

        if(!validDate) {
            console.error('ERR: titor encountered invalid date.');
            return false;

        }
        if(!validFormat) {
            console.error('ERR: titor encountered invalid format.');
            return false;
        }

        let newString = '';
        const formatChars = Object.keys(formatFunctions);
        const chars = format.split('');
        
        for(let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if(char === '\\') continue;
            const prevChar = chars[i - 1];
            if(prevChar === '\\') { newString += char; continue; }
            if(formatChars.includes(char)) {
            if(prevChar === '\\') { newString += char; continue; }
            newString += formatFunctions[char](date);
            continue;
            }
            newString += char;
        }

        return newString;
    }

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define([], factory);
        } else if (typeof module === 'object' && module.exports) {
            module.exports = factory();
        } else {
            root.myModule = factory();
        }
    }(typeof self !== 'undefined' ? self : this, function () {
        return titor;
    }));

    if(typeof window === 'object') window.titor = titor;
}
