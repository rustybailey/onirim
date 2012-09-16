var addCard = function(cardNameStr, cardTypeStr) {
	var htmlString = 
	'<div class="card ' + cardNameStr + '">' +
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
	$('#hand').append(htmlString);
}

$(document).ready(function() {
	createDeck();
	drawFirstFive();
});
