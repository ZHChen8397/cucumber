const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const cucumber = require('cucumber')

defineSupportCode(function({ Given, Then, When }) {
  let answer = 0;
  Given('I start with {int}', function (input) {
    answer = input;
  });
  When('I add {int}', function (input) {
    answer = answer + input;
  });
  Then('I end up with {int}', function (input) {
    assert.equal(answer, input);
  });
});
defineSupportCode(function({ Given, Then, When }) {
  let ans = 0;
  Given('I start with number {int}', function(input){
    ans = input
  })
  When('I add number {int}', function(input){
    ans = ans + input
  })
  Then('I end up with number {int}',function(input){
    assert.equal(ans,input)
  })
});


