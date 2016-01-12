var assert      = require('assert'),
    sinon       = require('sinon'),
    kissmetrics = require('../kissmetrics');

var testKey = 'abc123',
    cb,
    kmClient,
    request;

beforeEach(function() {
  request = sinon.spy();
  cb = sinon.spy();

  kmClient = new kissmetrics({
    key: testKey,
    request: request
  });
});



describe('URI Builder', function() {
  describe('Basic \'Record\' Functionality', function() {
    it('should form uri correctly with query string arguments', function() {
      kmClient.record("TestUser", "Test-Event", cb)
      assert.equal("https://trk.kissmetrics.com:443/e?_p=TestUser&_n=Test-Event&_k=abc123&", stripTime(request.args[0][0].uri));
    });
  });
});


// Utils

function stripTime(str) {
  return str.replace(/_t\=[0-9]+/, "");
}
