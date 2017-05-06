/*
this file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.
*/

function ClozeCard(text,cloze)
{
	this.text = text;
	this.cloze = cloze;

	//fullText
	//partial
	//cloze

	function fullText()
	{
		var textArray = text.split(" ");
		console.log(textArray);
	};

	function cloze()
	{
		var clozeArray = cloze.split(" ");
		console.log(clozeArray);

		var clozeCount = cloze.length;
		console.log(clozeCount);
		console.log(clozeArray.length);
	};

	function partial()
	{
		var newText = textArray.slice(clozeCount,this.text);
		console.log(newText);
	};

};
var testClozeCard = new ClozeCard("Superman wears a red cape","Superman");
console.log(testClozeCard.text);
console.log(testClozeCard.cloze);
testClozeCard.fullText();
testClozeCard.cloze();
testClozeCard.partial();



//need to take in the text then split it like: Split(text) , which will put the text in a comma seperated array name textArray
//need to take the split(cloze).length to get home many words the "Cloze" is to determine where to start in the textArray to get the partial text


//exports a constructor for creating cloze-deletion flashcards
module.exports = ClozeCard;