// Declare all the universal variables
var movies = ["alien", "aliens", "blade runner", "metropolis", "arrival", "the martian", "star wars", "sunshine", "star trek", "predestination", "serenity"];
var random = Math.floor(Math.random() * movies.length);
var randMov = movies[random].split("");
var remaining = 10;
var replacer = [];
var score = 0;
var abc = /([a-z])/;//Regular expression, so it can be only letters

$(document).ready(function() {
	console.log(randMov);
	for (var i = 0; i < randMov.length; i++) {
		if (randMov[i] === " ") {
			$('.clues').append(" ");
			replacer.push(" ")
		} else {
			$('.clues').append("_");
			replacer.push("_")
		}
	}
	console.log(replacer);
	
	$(document).on('keyup', function(evt){letterComp(randMov,replacer,evt.key)});
});

function letterComp(mov,arr,str) {
	for (var i = 0; i < mov.length; i++) {
		if (str === mov[i]){
			arr.splice(i,1,str);
		}
		$('.clues').text(arr.join(''));	
	}
	
}

/*i = 2 mov.length = 5 {
	if "i" === l 
		replacer splice (2), "i";
	i = 2

}	*/
