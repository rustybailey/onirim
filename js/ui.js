var addCard = function(cardNameStr, cardTypeStr) {
	var htmlString = 
	'<div class="card ' + cardNameStr + '">' +
		'<div class="front">' +
			'<div class="left_top">' +
				'<img style="height: 20px;" src="icons/'+ cardTypeStr +'.svg"/>' +
			'</div>' +
			'<div class="middle_center">' +
				'<img style="height: 80px;" src="icons/'+ cardNameStr +'.svg"/>' +
			'</div>' +
			'<div class="right_top">' +
				'<img style="height: 20px;" src="icons/'+ cardTypeStr +'.svg"/>' +
			'</div>' +
		'</div>' +
	'</div>'
	$('#hand').append(htmlString);
}

$(document).ready(function() {
	createDeck();
	drawFirstFive();
});
