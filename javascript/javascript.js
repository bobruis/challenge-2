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
						
			if (minutes < 10) { // Als minuten onder de tien zit plak er een nul voor
				minutes = '0' + minutes;
			}

			var message = '';

			var mq = window.matchMedia( "(min-width: 700px)" );

				if(hours >= 6 && hours <= 11){
					document.body.style.backgroundColor = "#CDE8FF";
					message = 'Goedenmorgen Bob';
					TweenMax.to('.sun', 8, {left: '75%', marginTop: '-70px', rotation: 360, display:'block', ease:'Elastic.easeOut'});
									}
				else if(hours >= 18 && hours <= 23){
					document.body.style.backgroundImage = "url('images/night.jpg')";
					message = 'Goedeavond Bob';
					TweenMax.to('.moon', 8, {left: '0%', marginTop: '-70px', rotation: 360, display:'block', delay: 1,ease:'Elastic.easeOut'});
				}
				else if(hours >= 0 && hours <= 5){
					document.body.style.backgroundImage = "url('images/night.jpg')";
					message = 'Goedenacht Bob';
					TweenMax.to('.moon', 8, {left: '0%', marginTop: '-70px', rotation: 360, display:'block', delay: 1, ease:'Elastic.easeOut'});
				}
				else{
					document.body.style.backgroundColor = "#FDFF7C";
					message = 'Goedemiddag Bob';
					TweenMax.to(".sun", 8, {left: '0%', marginTop: '-70px', rotation: 360, display:'block', ease:"Elastic.easeOut"});
				}


			if(mq.matches && hours >= 0 && hours <= 5){
				document.body.style.backgroundImage = "url('images/night.jpg')";
					TweenMax.to('.moon', 8, {left: '0%', marginTop: '5px', rotation: 360, display:'block', delay: 1, ease:'Elastic.easeOut'});
				}
			else{
				document.body.style.backgroundColor = "#FDFF7C";
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
