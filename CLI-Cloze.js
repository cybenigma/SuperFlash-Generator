var BasicCard   = require('BasicCard');
var ClozeCard   = require('CloseCard');
var DisplayCard = require('DisplayCard');

var getCommandStr = process.argv;
 console.log(getCommandStr);

 var commandChoice = getCommandStr[2];

 if(commandChoice = BasicCard || BasicCard.js) 
 {
 	var BasicCard = new BasicCard();
 }