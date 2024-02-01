const sinon = require("sinon");
const {describe, it} = require('mocha');
const assert = require("assert");
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./3-payment.js');

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        assert(spy.calledOnce);
        spy.restore();
    });
});
