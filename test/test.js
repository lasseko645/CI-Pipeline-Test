var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        // this is our first test to check that it works
        request(app).get('/').expect('hello world', done);
    });
});