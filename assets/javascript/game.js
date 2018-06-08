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

//Call initialized underscores
createGame();

//Functions fired on key event
document.onkeyup = function(evt){
	letterComp(randMov,replacer,evt.key);
	winner(randMov.join(''),replacer.join(''));
	loser();
}

//Initialize the underscores to start the game
function createGame() {
	var clues = document.getElementById('clues');
	console.log(clues.textContent.length);
	if(clues.textContent.length > 0){
		clues.textContent = '';
	}
	for (var i = 0; i < randMov.length; i++) {
		if (randMov[i] === " ") {
			clues.textContent += " ";
			replacer.push(" ");
		} else {
			clues.textContent += "_";
			replacer.push("_");
		}
	}
}

function letterComp(mov,arr,str) {
	var matched = false;
	for (var i = 0; i < mov.length; i++) {
		if (str === mov[i]){
			arr.splice(i,1,str);
		}
	}
	document.getElementById('clues').textContent = arr.join('');
	hold.push(str);
	scoreAndStore(str, hold);
}

function scoreAndStore(str,arr) {
	var letters = document.getElementById('letters');
	var lRemainder = letters.querySelector('span');
	var remainder = document.getElementById('remainder');
	var rChild = remainder.querySelector('span');
	var placed = false;

	for (var i = 0; i < arr.length; i++) {
		if(str === arr[i -1]){
			placed = true;
		}
	}
	if(!placed && str.match(abc) != null && str != 'Meta' && str != "Backspace" && str != "Enter" && str != "Shift" && str != "Control" && str != "Alt"){
		lRemainder.textContent += str;
		remaining--;
		rChild.textContent = remaining;
	}

}

function winner(mov,str) {
	var answer = document.getElementById('answer');
	var winDiv = document.getElementById('wins');
	var winCount = winDiv.querySelector('span');
	if(mov === str){
		answer.textContent = mov;
		score++;
		winCount.textContent = score;
		won = true;
	}
	gameReset();
}

function loser() {
	var answer = document.getElementById('answer');
	if (remaining <= 0) {
			answer.textContent = "You Lose!!!";
			lost = true;
		}
	gameReset();
}

function gameReset(){
	var instructions = 	document.getElementById('instructions')
	var remainder = 	document.getElementById('remainder');
	var rChild = 		remainder.querySelector('span');
	var answer = 		document.getElementById('answer');
	var clue = 			document.getElementById('clues');
	var letters = 		document.getElementById('letters');
	var lRemainder = 	letters.querySelector('span');
	if(lost || won){
		instructions.textContent = 'Press any key to play again.';
		document.onkeyup = function(evt){
			createGame();
			lRemainder.textContent = "";
			answer.textContent = "";
			var remaining = 10;
			rChild.textContent = remaining;
			lost = false;
			won = false;
			hold = [];
		}
	}
}