const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("Post User reqres", function() {
    it("Success register" , async function(){
        const response = await request
        .post("/api/users")
        .send({name : "faris",
        job: "soft eng"});

        expect(response.body.name).to.eql("faris");
        expect(response.body.job).to.eql("soft eng");
    })
})

