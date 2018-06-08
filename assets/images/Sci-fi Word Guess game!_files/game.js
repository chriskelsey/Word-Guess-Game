// Declare all the universal variables
var movies = ["alien", "aliens", "blade runner", "metropolis", "the arrival", "the martian", "star wars", "sunshine", "star trek", "predestination", "serenity"];
var random = Math.floor(Math.random() * movies.length);
var randMov = movies[random].split("");
var remaining = 10;
var replacer = [];
var score = 0;
var won = false;
var lost = false;
var hold = [];
var abc = /[a-z]/;//Regular expression, so it can be only letters

// When the window loads kick off the game
window.onload = function() {

	createGame();

	//Functions fired on key event
	document.onkeyup = function(evt){
		letterComp(randMov,replacer,evt.key);
		winner(randMov.join(''),replacer.join(''));
		loser();
		gameReset();
	}
}

//Initialize the underscores to start the game
function createGame() {
	var clues = document.getElementById('clues').textContent;
	for (var i = 0; i < randMov.length; i++) {
		if (randMov[i] === " ") {
			clues += (" ")
			replacer.push(" ")
		} else {
			clues += ("_")
			replacer.push("_")
		}
	}
}

function letterComp(mov,arr,str) {
	var matched = false;
	for (var i = 0; i < mov.length; i++) {
		if (str === mov[i]){
			arr.splice(i,1,str);
			matched = true;
		}
	}
		if (!matched && str.match(abc) != null && str != 'Meta' && str != "Backspace" && str != "Enter" && str != "Shift" && str != "Control" && str != "Alt") {
			remaining--;
		}
	document.getElementById('clues').textContent = arr.join('');
	hold.push(str);
	scoreAndStore(str, hold);
}

function scoreAndStore(str,arr) {
		if(str.match(abc) != null && str != 'Meta' && str != "Backspace" && str != "Enter" && str != "Shift" && str != "Control" && str != "Alt"){
			if(arr.length > 0){
				for (var i = 0; i < arr.length; i++) {
					//if (str == arr[i]){console.log(arr);}
				}
				$('.letters p > span').append(str);
				$('.remainder').html(remaining);
			} else {
				$('.letters p > span').append(str);
				$('.remainder').html(remaining);
			}
		}
	// }
}

function winner(mov,str) {
	var answer = document.getElementById('answer').innerHTML;
	var winDiv = document.getElementById('wins');
	var winCount = winDiv.querySelector('span').innerHTML;
	if(mov === str){
		$('.answer').html(mov);
		//answer = mov;
		score++;
		winCount = score;
		won = true;
	}
}

function loser() {
	if (remaining <= 0) {
			$('.answer').html('You Lose!!!');
			lost = true;
		}
	
}

function gameReset(){
	if(lost || won){
		$('.instructions').html('Press any key to play again.');
		$(document).on('keyup', function(evt){
			
			$('.answer, .clues, .letters p > span').empty();
			for (var i = 0; i < randMov.length; i++) {
				if (randMov[i] === " ") {
					$('.clues').append(" ");
					replacer.push(" ")
			} else {
				$('.clues').append("_");
				replacer.push("_")
			}
			var remaining = 10;
			$('.remainder').html(remaining);
	}
		});	
		lost = false;
		won = false;
		hold = [];
	}	
}