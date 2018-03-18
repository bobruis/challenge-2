TweenMax.from(".title", 1, {top:-50, delay: 1});

var label = document.getElementsByClassName('label');
TweenMax.from(label, 1, {left:-300, opacity: 0.3});

TweenMax.from("#current-time", 1,{left: -300, opacity: 0.3});
TweenMax.from("#current-date", 1,{left: -300, opacity: 0.3});

