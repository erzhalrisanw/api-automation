const chai = require("chai");
const assert = require("chai").expect;
chai.use(require("chai-json-schema"));

const pageSocial = require("../page/social.api");
const page = require("../page/login.api");
const schema = require("../schema/social.schema.js");

let payload = {
  "suggestionContact": {"phone" : ["0812935392244", "087889907709"]},
  "addFriend": { "user_id" : 10}
};

let status = {
  "pending" : 0,
  "confirmed": 1
}
let token = process.env.TOKEN;

const testCases = {
  describe: "As User, I want to get friends",
  positive: {
    getFriendPending: "Verify get friend with status is Pending",
    getFriendConfirmed: "Verify get friend with status is Confirmed",
    getFriendExcludeGroupMember: "Verify get friend exclude group member",
    getFriendSuggestion: "Verify get friend suggestion",
    getFriendSuggestionContact: "Verify get friend suggestion contact",
    getUserFriendMutual: "Verify get user friend mutual",
    postAddFriend: "Verify post add friend",
  },
  negative: {
    invalidUsername: "Verify invalid username",
  }
};

describe(`${testCases.describe}`, () => {

  it(`${testCases.positive.getFriendPending}`, async () => {
    const response = await pageSocial.getFriend(token, status.pending);
    assert(response.statusCode).to.equal(200);
    assert(response.body.data[0].confirmed).to.equal(0)
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body).to.be.jsonSchema(schema.getFriendSchema);
  });

  it(`${testCases.positive.getFriendConfirmed}`, async () => {
    const response = await pageSocial.getFriend(token, status.confirmed);
    assert(response.statusCode).to.equal(200);
    assert(response.body.data[0].confirmed).to.equal(1)
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body).to.be.jsonSchema(schema.getFriendSchema);
  });
  
  it(`${testCases.positive.getFriendExcludeGroupMember}`, async () => {
    const response = await pageSocial.getFriendExcludeGroupMember(token);
    assert(response.statusCode).to.equal(200);
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body).to.be.jsonSchema(schema.getFriendSchema);
  });

  it(`${testCases.positive.getFriendSuggestion}`, async () => {
    const response = await pageSocial.getFriendSuggestion(token);
    assert(response.statusCode).to.equal(200);
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body).to.be.jsonSchema(schema.getFriendSuggestionSchema);
  });

  it(`${testCases.positive.getFriendSuggestionContact}`, async () => {
    const response = await pageSocial.getFriendSuggestionContact(token, payload.suggestionContact);
    assert(response.statusCode).to.equal(200);
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body.data[0].phone).to.equal(payload.suggestionContact.phone[0])
    assert(response.body.data[1].phone).to.equal(payload.suggestionContact.phone[1])
    assert(response.body).to.be.jsonSchema(schema.getFriendSuggestionContactSchema);
  });
  
  it(`${testCases.positive.getUserFriendMutual}`, async () => {
    const response = await pageSocial.getUserFriendMutual(token);
    assert(response.statusCode).to.equal(200);
    assert(response.body.message).to.equal('Permintaan informasi berhasil!');
    assert(response.body).to.be.jsonSchema(schema.getUserFriendMutualSchema);
  });

  it(`${testCases.positive.postAddFriend}`, async () => {
    const response = await pageSocial.postAddFriend(token, payload.addFriend);
    assert(response.statusCode).to.equal(200);
    assert(response.body.message).to.equal('Permintaan menjadi teman telah dikirim');
    assert(response.body).to.be.jsonSchema(schema.postAddFriendSchema);
  });

});