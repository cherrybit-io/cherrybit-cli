#!/usr/bin/env node
const clear = require('clear');
const CFonts = require('cfonts');

clear();

const args = process.argv.slice(2);
const appName = 'CherryBit';
if (args.length === 0) {
    CFonts.say(appName, {colors: ['#ff5d49']});
    console.log(`Usage: 
    ${appName} balance
        gets balance in tokens and shows public addres

    ${appName} send <amount> <address>
        Send a fixed amount of tokens from your wallet to the specified address

    ${appName} wallet create
        Guide you through creating a new wallet`);
    process.exit();
}

const main = async () => {
    if (args[0] === 'wallet') {
        if (args[1] === 'create') {
            console.log('Guides you through creating a new wallet');
        }
    }
};

main();