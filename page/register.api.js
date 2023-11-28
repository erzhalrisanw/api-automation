const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL);

const postRegister = (payload) =>
    api
        .post('/user/register')
        .set('Content-Type', 'application/json')
        .send(payload);

module.exports = {
    postRegister
}