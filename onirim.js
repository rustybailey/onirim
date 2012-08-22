/*
Notes:
Need to deal with limbo from initialDraw
Continue game after drawing first hand
*/


//Card constructor
function Card(cardName, cardType, amount){
	this.cardName = cardName;
	this.cardType = cardType;
	this.amount = amount;
};

//17 different types of cards -- Maybe try to put in an array or object so that initializing the deck will be easy?
var obSun = new Card("Observatory", "Sun", 9);
var obMoon = new Card("Observatory", "Moon", 4);
var obKey = new Card("Observatory", "Key", 3);
var obDoor = new Card("Observatory", "Door", 2);
var aqSun = new Card("Aquarium", "Sun", 8);
var aqMoon = new Card("Aquarium", "Moon", 4);
var aqKey = new Card("Aquarium", "Key", 3);
var aqDoor = new Card("Aquarium", "Door", 2);
var gaSun = new Card("Garden", "Sun", 7);
var gaMoon = new Card("Garden", "Moon", 4);
var gaKey = new Card("Garden", "Key", 3);
var gaDoor = new Card("Garden", "Door", 2);
var liSun = new Card("Library", "Sun", 6);
var liMoon = new Card("Library", "Moon", 4);
var liKey = new Card("Library", "Key", 3);
var liDoor = new Card("Library", "Door", 2);
var drMare = new Card("Dream", "Nightmare", 10);

//Making an array of unique cards
var cards = [obSun, obMoon, obKey, obDoor, 
			aqSun, aqMoon, aqKey, aqDoor,
			gaSun, gaMoon, gaKey, gaDoor,
			liSun, liMoon, liKey, liDoor,
			drMare]; 

//Initializing the deck array from the cards array
var deck = [];
for(var i = 0; i < cards.length; i++){
	for(var j = 0; j < cards[i].amount; j++){
		deck.push(cards[i]);
	}
}

//Draw a card from the deck
var draw = function(){
	var card = deck[Math.floor(Math.random()*deck.length)];
	return card;
};

//Declaring other stacks
var hand = [];
var limbo = [];
var playArea = [];
var doorsGained = [];


//***initialDraw does not move limbo cards back to deck yet*** Maybe it should be a different function?
var initialDraw = function(){
	var newCard = draw();
	if(newCard.cardType === "Nightmare" || newCard.cardType === "Door"){
		deck.pop(newCard);
		limbo.push(newCard);
	} else {
		deck.pop(newCard);
		hand.push(newCard);
	}
};

//drawFirstFive draws until the first 5 cards in hand are not Doors or Nightmares
var drawFirstFive = function(){
	initialDraw();
	if(hand.length != 5){
		drawFirstFive();
	}
}

//Tests

drawFirstFive();
console.log(hand);
console.log(limbo);
console.log(deck.length);
