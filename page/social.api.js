const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.BASE_URL);

let payload = {
    'login': 'saipul',
    'password': 'password'
}

const getFriend = (token, status) =>
    api
        .get(`/social/friend/${status}`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send()

const getFriendExcludeGroupMember = (token) =>
    api
        .get(`/social/friend/exclude/80`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send()

const getFriendSuggestion = (token) =>
    api
        .get(`/social/friend/suggestion`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send()

const getFriendSuggestionContact = (token, payload) =>
    api
        .post(`/social/friend/suggestion/contact`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send(payload)

const getUserFriendMutual = (token) =>
    api
        .get(`/social/${process.env.MUTUAL_FRIEND}/friend/mutual`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send()

const postAddFriend = (token, payload) =>
    api
        .post(`/social/friend/add`)
        .query({ offset: '0', limit: '10' })
        .set('Authorization', `Bearer ${token}`)
        .send(payload)

module.exports = {
    getFriend,
    getFriendExcludeGroupMember,
    getFriendSuggestion,
    getFriendSuggestionContact,
    getUserFriendMutual,
    postAddFriend
}