#!/usr/bin/env node
const clear = require('clear');
const CFonts = require('cfonts');

clear();

const args = process.argv.slice(2);
const appName = 'CherryBit';
if (args.length === 0) {
    CFonts.say(appName, {colors: ['red']});
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
    CFonts.say(appName, {colors: ['red']});
    if (args[0] === 'wallet') {
        if (args[1] === 'create') {
            console.log('Guides you through creating a new wallet');
        }
    } else if (args[0] === 'balance') {
        console.log('Gets balance in tokens and shows public address');
    } else if (args[0] === 'send') {
        console.log('Send a fixed amount of tokens from your wallet to the specified address');
    } else {
        console.log('That was not a valid command. Please try again.');
        process.exit();
    }
};

main();