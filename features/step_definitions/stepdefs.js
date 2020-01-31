const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const day = require('../../index.js')

  Given('today is {string}', function (givenDay) {
    this.today = givenDay;
  });
  
  When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = day.isItFriday(this.today);
  });
  
  Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });
  
