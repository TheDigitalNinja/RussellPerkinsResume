var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('Should be status code 200', function(done) {
    request(app).get('/').expect(200,done)
  });
  it('Should have proper content (Russell Perkins & a footer)', function(done) {
  	request(app).get('/')
  		.expect(/Russell Perkins/)
  		.expect(/id="footer"/,done);
  });
});

describe('GET /css/style.css', function() {
  it('Should be status code 200', function(done) {
    request(app).get('/css/style.css').expect(200,done)
  });
});