const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL);

const postLogin = (payload) =>
    api
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send(payload);

module.exports = {
    postLogin
}