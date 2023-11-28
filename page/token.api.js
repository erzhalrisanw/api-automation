const request = require("supertest");
const env = require("dotenv").config();
const api = request(process.env.BASE_URL);

let payload = {
  login: "saipul",
  password: "password",
};

const getToken = () =>
    api.post("/auth/login")
        .set("Content-Type", "application/json")
        .send(payload)
        // .expect((res) => {
        //     console.log("haha "+ res.body.data)
        //     res.body.data
        //    })

        // console.log("GET TOKEN " + getToken)
module.exports = {
    getToken
};
