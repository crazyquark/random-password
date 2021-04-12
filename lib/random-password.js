'use strict'

const fs = require('fs');

if (process.platform !== 'linux') {
    throw new Error('Random password generation only works on Linux!');
}

const alphabet = [...Array(10)].map((_, i) => i + '')
    .concat([...Array(26)].map((_, i) => String.fromCharCode(i + 65) + ''))
    .concat([...Array(26)].map((_, i) => String.fromCharCode(i + 97) + ''));

function randomPassword(length = 32) {
    return new Promise((resolve, reject) => {
        fs.open('/dev/urandom', (err, fd) => {
            if (err) {
                reject(err);
                return;
            }

            const buffer = Buffer.alloc(length)
            fs.read(fd, buffer, 0, length, 0, (err, bytesRead) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(buffer.reduce((acc, value) => acc + alphabet[Math.abs(value) % alphabet.length], ''));
            });
        })
    });
}

randomPassword();

module.exports = randomPassword;
