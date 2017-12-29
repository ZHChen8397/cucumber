const  assert = require('assert')
const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({Given,When,Then}){
  let ans = 0;
  Given('I had number {int}', function(input){
    ans = input
  })
  When('I add with {int}',function(input){
    ans += input
  })
  Then('I got answer {int}', function(input){
    assert.equal(ans,input)
  })
})