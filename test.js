const randomPassword = require('./index');

const test = async () => {
    for (let i = 10; i < 100; i++) {
        let password = await randomPassword(i);
        console.log(password);
    }
};

test();