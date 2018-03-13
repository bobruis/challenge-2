(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var currentTime = document.getElementById('current-time'),
		currentDate = document.getElementById('current-date');

	
	setInterval(function() {
		var d = new Date();
	
		var hours = d.getHours(),
			minutes = d.getMinutes(),
			month = formatMonth(d.getMonth()),
			date = d.getDate();
					
		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		var message = '';

			if(hours >= 18){
				message = 'Goedeavond citizen';
			}
			else{
				message = 'Goedemiddag citizen';
			}
		document.getElementById('welcome-message').innerHTML = message;
		
		var sepClass = '';
			
			if (d.getSeconds() % 2 === 1) sepClass = 'trans';
		
		var sep = '<span class="' + sepClass + '">:</span>';
	
		currentTime.innerHTML = hours + sep + minutes;
		currentDate.textContent = month + ' ' + date;
	}, 1000);
	
	function formatMonth(m) {
		m = parseInt(m, 10);
	
		if (m < 0) {
			m = 0;
		} else if (m > 11) {
			m = 11;
		}
	
		var monthNames = [
			'januari', 'februari', 'maart',
			'april', 'mei', 'juni', 
			'juli', 'augustus', 'september',
			'oktober', 'november', 'december'
		];
		
		return monthNames[m];

	// functie om de juiste maand te pakken
	// controleert of er niet iets onder de 0 of boven de 11 aanwezig is
	// var montNames is een array die start bij 0 daardoor heeft [m] bij 0 - january etc. 
	}



});

	

})();