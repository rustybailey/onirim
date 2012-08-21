/*
Make a draw function.
Add a card to the hand.
3 more arrays -  Hand, Limbo, PlayArea(or something)
Experiment with adding cards to limbo, playarea, etc., so that cards are never repeated.
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
var	obDoor = new Card("Observatory", "Door", 2);
var aqSun = new Card("Aquarium", "Sun", 8);
var aqMoon = new Card("Aquarium", "Moon", 4);
var aqKey = new Card("Aquarium", "Key", 3);
var	aqDoor = new Card("Aquarium", "Door", 2);
var gaSun = new Card("Garden", "Sun", 7);
var gaMoon = new Card("Garden", "Moon", 4);
var gaKey = new Card("Garden", "Key", 3);
var	gaDoor = new Card("Garden", "Door", 2);
var liSun = new Card("Library", "Sun", 6);
var liMoon = new Card("Library", "Moon", 4);
var liKey = new Card("Library", "Key", 3);
var	liDoor = new Card("Library", "Door", 2);
var drMare = new Card("Dream", "Nightmare", 10);

//somehow need to automatically make this an array of the cards
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

//Print deck
console.log(deck);
console.log(deck.length);