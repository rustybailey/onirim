var addCard = function(cardNameStr, cardTypeStr, stack) {
	var htmlString = '';
	if (cardTypeStr === "moon" || cardTypeStr === "sun" || cardTypeStr === "key") {
		htmlString = '<div class="card ' + cardNameStr + '">' +
			'<div class="front">' +
				'<div class="left_top">' +
					'<img src="icons/'+ cardTypeStr +'.svg"/>' +
				'</div>' +
				'<div class="middle_center">' +
					'<img src="icons/'+ cardNameStr +'.svg"/>' +
				'</div>' +
				'<div class="right_top">' +
					'<img src="icons/'+ cardTypeStr +'.svg"/>' +
				'</div>' +
			'</div>' +
		'</div>'
	} else if (cardTypeStr === 'door') {
		htmlString = '<div class="card ' + cardNameStr + '">' +
			'<div class="front">' +
				'<div class="middle_top">' +
					'<img src="icons/' + cardNameStr + '.svg"/>' +
				'</div>' +
				'<div class="middle_center">' +
					'<img src="icons/' + cardTypeStr + '.svg"/>' +
				'</div>' +
			'</div>' +
		'</div>'
	} else if (cardTypeStr === 'nightmare') {
		htmlString = '<div class="card '+ cardTypeStr +'">' +
			'<div class="front">' +
				'<div class="nightmare_one">' +
					'<img src="icons/'+ cardTypeStr +'.svg"/>' +
				'</div>' +
				'<div class="nightmare_two">' +
					'<img src="icons/'+ cardTypeStr +'.svg"/>' +
				'</div>' +
				'<div class="nightmare_three">' +
					'<img src="icons/'+ cardTypeStr +'.svg"/>' +
				'</div>' +
			'</div>' +
		'</div>'
	}
	$(htmlString).hide().appendTo(stack).fadeIn();
}

$(document).ready(function() {
	createDeck();
	drawFirstFive();
});
