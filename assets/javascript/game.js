// Declare all the universal variables
var movies = ["alien", "aliens", "blade runner", "metropolis", "arrival", "the martian", "star wars", "sunshine", "star trek", "predestination", "serenity"];
var random = Math.floor(Math.random() * movies.length);
var randMov = movies[random];
var remaining = 10;
var score = 0;
var abc = /([a-z])/;//Regular expression, so it can be only letters

$(document).ready(function() {
	var filler = "";
	for (var i = 0; i < randMov.length; i++) {
		if (randMov.charAt(i) === " ") {
			filler = filler + " ";
		} else {
			filler = filler + "_";
		}
	}
	$('.clues').text(filler);
	$(document).on('keyup', function(evt){letterComp(evt.key)});
});

function letterComp(str) {
	console.log(str);
	var replacer = "";
	for (var i = 0; i < randMov.length; i++) {
		if (str === randMov[i]){
			replacer = replacer + str;
		} else if(randMov[i] === " ") {
			replacer = replacer + " ";
		} else {
			replacer = replacer + "_";
		}
		$('.clues').text(replacer);
	}
}	
