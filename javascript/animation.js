TweenMax.from(".title", 1, {top:-50, delay: 1});

var label = document.getElementsByClassName('label');
TweenMax.from(label, 2, {left:-300, opacity: 0.3});

TweenMax.from("#current-time", 3,{left: -300, opacity: 0.5});
TweenMax.from("#current-date", 3,{left: -300, opacity: 0.5});