var BasicCard   = require('./BasicCard.js');
var DisplayCard = require('./DisplayCard.js');

var getCommandStr = process.argv;
 console.log(getCommandStr);


'use strict';
var inquirer = require('inquirer');

var questions = 
	[
		{
		  type: 'input',
		  name: 'front',
		  message: 'Enter the phrase for the FRONT of your BASIC card: '
		},
		{
		  type: 'input',
		  name: 'back',
		  message: '\n Enter the phrase for the BACK of your BASIC card: ',
		}
	];

//returns the Q&A for the front and back of the card
inquirer.prompt(questions).then(function (answers) 
	{
		//console.log(JSON.stringify(answers, null, '  '));
		console.log("front :" + answers.front);
		console.log("\n back  :" + answers.back);

		//displays the card in Text GUI on the screen for the user
		var basicDisplayCard = new DisplayCard;
		basicDisplayCard.displayFront(answers.front);
		basicDisplayCard.displayBack(answers.back);

	});

