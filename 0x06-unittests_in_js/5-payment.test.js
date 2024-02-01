const { describe,it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToAPI", function() {
  beforeEach("set up spy before each test", () => {
    sinon.spy(console, "log");
  });

  afterEach("restore spy after each test", () => {
    console.log.restore();
  })
  it("should verify the console was called once", function() {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;

  });

  it("should check is console was called once in the new function", function() {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
});
