const { describe, it } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');


describe("getPaymentTokenFromAPI", function() {
    it("should test with done callback", function(done) {
      getPaymentTokenFromAPI(true)
        .then((data) => {
            expect(data).to.have.property('data');
            done();
        });
    });
});

