//after every move, run a function to log all squares with text content into pc and player arrays
//that way we don't need to carry the index.

//if stmt for event run is on &&!
var msgText = document.querySelector(".begin");
var allSquares = document.querySelectorAll("td");
var availSquares = document.querySelectorAll(".available");
var newButton = document.querySelector("button");
var streakDisplay = document.querySelector("#streak");
var scoreDisplay = document.querySelector("#score");

var playerMoves = [];
var pcMoves = [];
var availSquaresIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var winningArray = [];
var winStates = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

counter = 0;
streakNum = 0;
scoreNum = 0;
aWinner = false;
playerWin = false;
pcWin = false;

firstRun();
//GOOD
function firstRun(){
	for(var i = 0; i < allSquares.length; i++){
		allSquares[i].classList.add("available");
		allSquares[i].addEventListener("click", function(){
			playGame(this);
		});
	};
};

function playGame(square){
	if(square.textContent != "X" && square.textConten != "O"){
		//mark square and remove ability for event listener to run again
		square.textContent = "X";
		logMove(playerMoves, "X");
		
		
		
		
	};
};
//GOOD
function logMove(arr, token){
	var moveIdx = 0;
	//find indexes of tokens in the allSquares
		for(var i = 0; i < allSquares.length; i++){
			if(allSquares[i].textContent == token){
				//if move index is not already in pc/player move array, put it in
				if(arr.indexOf(i) == -1){
					moveIdx = i;
					arr.push(moveIdx);
				};
			};
		};
	//remove from available squares array for pc move logic
	removeMe = availSquaresIdx.indexOf(moveIdx)
	availSquaresIdx.splice(removeMe, 1);
	//remove available class
	allSquares[moveIdx].classList.remove("available");
};

function pcMove(){
	if(availSquaresIdx.length > 1){
		//find and move on an open square
		randNum = Math.floor(Math.random() * availSquaresIdx.length);
		var pcMoveIdx = availSquaresIdx[randNum];
		var pcSquare = allSquares[pcMoveIdx];
		pcSquare.textContent = "O";
		logMove(pcMoves, 0);
	};
};