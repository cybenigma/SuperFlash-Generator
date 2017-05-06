/*
This file should define a Node module that exports a constructor for creating 
basic flashcards, e.g.: module.exports = BasicCard;
The constructor should accept two arguments: front and back.
The constructed object should have a front property that contains the text on 
the front of the card.
The constructed object should have a back property that contains the text on 
the back of the card.
*/

function BasicCard(front, back) 
{
this.front = front;
this.back  = back;
};
 testCard = new BasicCard("who Loves cookies?","Cookie Monster");
 console.log(testCard.front);
 console.log(testCard.back);
 

//exports a constructor for creating basic flashcards
module.exports = BasicCard;