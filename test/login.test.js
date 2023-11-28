const chai = require('chai');
const assert = require('chai').expect; 
chai.use(require('chai-json-schema'));

const page = require('../page/login.api');
const schema = require('../schema/login.schema.js');

let payload = {};

const testCases = {
    describe: 'As User, I want to login to the apps',
    positive: {
        validCredentials: 'Verify login success'
    },
    negative: {
        invalidUsername: 'Verify invalid username',
        invalidPassword: 'Verify invalid password'
    }
}

describe(`${testCases.describe}`, () => {
    it(`${testCases.positive.validCredentials}`, async () => {
        payload.login = 'saipul'
        payload.password = 'password'
        const response = await page.postLogin(payload);
        assert(response.statusCode).to.equal(200);
        assert(response.body.message).to.equal('Selamat Anda kembali login!');
        assert(response.body).to.be.jsonSchema(schema.valid_schema);
        process.env.TOKEN = response.body.data
    });

    it(`${testCases.negative.invalidUsername}`, async () => {
        payload.login = 'saip'
        const response = await page.postLogin(payload);
        assert(response.statusCode).to.equal(401);
        assert(response.body.message).to.equal('Maaf username yang dimasukkan belum tepat. Coba ingat kembali username Anda atau klik lupa kata sandi.');
        assert(response.body).to.be.jsonSchema(schema);
    });

    it(`${testCases.negative.invalidPassword}`, async () => {
        payload.login = 'saipul'
        payload.password = 'pass'
        const response = await page.postLogin(payload);
        assert(response.statusCode).to.equal(401);
        assert(response.body.message).to.equal('Maaf kata sandi yang dimasukkan belum tepat. Coba ingat kembali kata sandi Anda atau klik lupa kata sandi.');
        assert(response.body).to.be.jsonSchema(schema);
    });
});