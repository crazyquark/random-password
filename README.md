# random-password-async

A simple async random password generator that uses /dev/urandom on Linux.

## Install  

    npm install random-password-async  

## Usage
    const randomPassword = require('random-password-async');

    const getPasswords = async () => {
        for (let i = 30; i < 50; i++) {
            const pwd = await randomPassword(i);
            console.log(pwd);
        }
    }

    getPasswords();