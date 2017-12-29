const  assert = require('assert')
const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({Given,When,Then,And}){
  let ans = 0;
  let data
  let expectData = {
    userName:'Jeff',
    email:'123@gmail.com',
    pwd:'123456'
  }
  Given('I had number {int}', function(input){
    ans = input
  })
  When('I add with {int}',function(input){
    ans += input
  })
  When('I create a user:',function(table){
    data = table.rowsHash()
    assert.deepEqual(data,expectData)
  })
  And('I add another number {int}',function(input){
    ans += input
  })
  Then('I got answer {int}', function(input){
    assert.equal(ans,input)
  })
})