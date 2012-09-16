/*
Notes:
Continue game after drawing first hand
*/


//Card constructor
function Card(cardName, cardType, amount) {
	this.cardName = cardName;
	this.cardType = cardType;
	this.amount = amount;
	this.cardNameStr = this.cardName.toString().toLowerCase();
	this.cardTypeStr = this.cardType.toString().toLowerCase();
}

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

//Making an array of the unique card types
var cards = [obSun, obMoon, obKey, obDoor,
			aqSun, aqMoon, aqKey, aqDoor,
			gaSun, gaMoon, gaKey, gaDoor,
			liSun, liMoon, liKey, liDoor,
			drMare];


//Declare all stacks
var deck = [];
var hand = [];
var limbo = [];
var playArea = [];
var doorsGained = [];

//Fisher-Yates shuffle function
var shuffle = function(array) {
    var tmp, current, top = array.length;
    if(top) {
    	while(--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
    	}
    }
    return array;
};

//Initializing the deck array from the cards array and shuffling deck
var createDeck = function() {
	for (var i = 0; i < cards.length; i++) {
		for (var j = 0; j < cards[i].amount; j++) {
			deck.push(cards[i]);
		}
	}
	shuffle(deck);
};

//Draw the first card from the deck
var draw = function() {
	var card = deck[0];
	return card;
};


//initialDraw draws a card - Goes in limbo if Nightmare or Door, otherwise goes in hand.
var initialDraw = function() {
	var newCard = draw();
	if (newCard.cardType === "Nightmare" || newCard.cardType === "Door") {
		deck.splice(0,1);
		addCard(newCard.cardNameStr, newCard.cardTypeStr, '#limbo');
		limbo.push(newCard);
	} else {
		deck.splice(0,1);
		addCard(newCard.cardNameStr, newCard.cardTypeStr, '#hand');
		hand.push(newCard);
	}
};

//drawFirstFive calls initialDraw until the first 5 cards in hand are not Doors or Nightmares
var drawFirstFive = function() {
	setTimeout(function() {
		initialDraw();
		if (hand.length !== 5) {
			drawFirstFive();
		}
	}, 300)
};

//Puts limbo cards back in deck and then shuffles deck
var shuffleLimboToDeck = function() {
	deck.push.apply(deck, limbo);
	limbo = [];
	shuffle(deck);
};




