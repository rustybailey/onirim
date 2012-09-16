var addCard = function(cardName, cardType) {
	var htmlString = 
	'<div class="card ' + cardName + '">' +
		'<div class="front">' +
			'<div class="left_top">' +
				'<img style="height: 20px;" src="icons/'+ cardType +'.svg"/>' +
			'</div>' +
			'<div class="middle_center">' +
				'<img style="height: 80px;" src="icons/'+ cardName +'.svg"/>' +
			'</div>' +
			'<div class="right_top">' +
				'<img style="height: 20px;" src="icons/'+ cardType +'.svg"/>' +
			'</div>' +
		'</div>' +
	'</div>'
	$('#labyrinth').append(htmlString);
}

$(document).ready(function() {
  addCard('observatory', 'moon');
});
