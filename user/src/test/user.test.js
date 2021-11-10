var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("unit test for login page",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .send('username :test,password : test123')
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      
      done();
    });
  });

});