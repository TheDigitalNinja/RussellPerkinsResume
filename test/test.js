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

describe('GET /js/scripts.js', function() {
  it('Should be status code 200', function(done) {
    request(app).get('/js/scripts.js').expect(200,done)
  });
});

describe('GET external resources', function() {
  it('jquery', function(done) {
    request('https://code.jquery.com').get('/jquery-2.1.4.min.js').expect(200,done)
  });
  it('bootstrap js', function(done) {
    request('https://maxcdn.bootstrapcdn.com').get('/bootstrap/3.3.5/js/bootstrap.min.js').expect(200,done)
  });
  it('bootstrap css', function(done) {
    request('https://maxcdn.bootstrapcdn.com').get('/bootstrap/3.3.5/css/bootstrap.min.css').expect(200,done)
  });
  it('FontAwesome', function(done) {
    request('https://maxcdn.bootstrapcdn.com').get('/font-awesome/4.4.0/css/font-awesome.min.css').expect(200,done)
  });
});