const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const cucumber = require('cucumber')

defineSupportCode(function({Given, When, Then}){
  let string = ''
  Given('I had a string {string}',function(input){
    string = input
  })
  When('I pending it with {string}',function(input){
    string = string + ' ' + input
  })
  Then('I should get {string}',function(ans){
    assert.equal(string,ans)
  })
})

defineSupportCode(function({Given, When, Then}){
  let string = ''
  Given('a string {string}',function(input){
    string = input
  })
  When('pend with {string}',function(input){
    string = string + ' ' + input
  })
  Then('should get {string}',function(ans){
    assert.equal(string,ans)
  })
})