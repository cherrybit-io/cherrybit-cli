const colors = require('colors');
const clear = require('clear');
const CFonts = require('cfonts');

clear();

const args = process.argv.slice(2);
const appName = 'CherryBit';
if (args.length === 0) {
    CFonts.say(appName, {colors: ['red']});
}