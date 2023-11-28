const chai = require('chai');
const assert = require('chai').expect; 
chai.use(require('chai-json-schema'));

const page = require('../page/register.api');
const schema = require('../schema/register.schema.js');

const randomstring = require("randomstring");

const generateUsername1 = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  });

const generateUsername2 = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  });

const generateUsername3 = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  });

const generatePhone1 = randomstring.generate({
    length: 8,
    charset: 'numeric'
  });

const generatePhone2 = randomstring.generate({
    length: 8,
    charset: 'numeric'
  })
const generatePhone3 = randomstring.generate({
    length: 8,
    charset: 'numeric'
  });

let payload = {};

const testCases = {
    describe: 'As User, I want to register account',
    positive: {
        validCredentials: 'Verify register with valid data'
    },
    negative: {
        usernameExist: 'Verify username is exist',
        phoneExist: 'Verify phone number is exist',
        emailExist: 'Verify email is exist'
    }
}

describe(`${testCases.describe}`, () => {
    it(`${testCases.positive.validCredentials}`, async () => {
        payload.username = generateUsername1
        payload.password = 'password'
        payload.name = generateUsername1
        payload.phone = '0812'+generatePhone1
        payload.email = generateUsername1+'@gmail.com'
        payload.birth_date = '1999-09-09'
        payload.gender = 1
        const response = await page.postRegister(payload);
        assert(response.statusCode).to.equal(200);
        assert(response.body.message).to.equal('Selamat Pendaftaran berhasil!');
        assert(response.body).to.be.jsonSchema(schema.valid_schema);
    });

    it(`${testCases.negative.usernameExist}`, async () => {
        payload.username = generateUsername1
        payload.password = 'password'
        payload.name = generateUsername2
        payload.phone = '0812'+generatePhone2
        payload.email = generateUsername2+'@gmail.com'
        payload.birth_date = '1999-09-09'
        payload.gender = 1
        const response = await page.postRegister(payload);
        assert(response.statusCode).to.equal(400);
        assert(response.body.message).to.equal(`Duplicate entry '${payload.username}' for key 'user.username_UNIQUE'`);
        assert(response.body).to.be.jsonSchema(schema.valid_schema);
    });

    it(`${testCases.negative.phoneExist}`, async () => {
        payload.username = generateUsername2
        payload.password = 'password'
        payload.name = generateUsername2
        payload.phone = '0812'+generatePhone1
        payload.email = generateUsername2+'@gmail.com'
        payload.birth_date = '1999-09-09'
        payload.gender = 1
        const response = await page.postRegister(payload);
        assert(response.statusCode).to.equal(400);
        assert(response.body.message).to.equal(`Duplicate entry '${payload.phone}' for key 'user.phone_UNIQUE'`);
        assert(response.body).to.be.jsonSchema(schema.valid_schema);
    });

    it(`${testCases.negative.emailExist}`, async () => {
        payload.username = generateUsername3
        payload.password = 'password'
        payload.name = generateUsername3
        payload.phone = '0812'+generatePhone3
        payload.email = generateUsername1+'@gmail.com'
        payload.birth_date = '1999-09-09'
        payload.gender = 1
        const response = await page.postRegister(payload);
        assert(response.statusCode).to.equal(400);
        assert(response.body.message).to.equal(`Duplicate entry '${payload.email}' for key 'user.email_UNIQUE'`);
        assert(response.body).to.be.jsonSchema(schema.valid_schema);
    });
});