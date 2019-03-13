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

function firstRun(){
	for(var i = 0; i < allSquares.length; i++){
		allSquares[i].classList.add("available");
		allSquares[i].addEventListener("click", function(){
			playGame(this);
		});
	};
};

newButton.addEventListener("click", function(){
	msgText.textContent = "";
	for(var i = 0; i < allSquares.length; i++){
		allSquares[i].classList.add("available");
		allSquares[i].classList.remove("winner");
		allSquares[i].textContent = "";
	};
	//remove streak if new game pressed mid-game
	if(playerWin == false){
		streakNum = 0;
		streakDisplay.textContent = streakNum;
	};
	//reset flags, counters, and arrays
	aWinner = false;
	playerWin = false;
	pcWin = false;
	playerMoves = [];
	pcMoves = [];
	availSquaresIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	winningArray = [];
});

function playGame(square){
	if(square.textContent != "X" && square.textContent != "O" && square.textContent != " "){
		msgText.textContent = "";
		//mark square and remove ability for event listener to run again
		square.textContent = "X";
		logMove(playerMoves, "X");
		winGame(playerMoves);
		//if game not won, make a pc move
		aWinner == true ? playerWin = true : pcMove();
		if(aWinner == true && playerWin == false){
			pcWin = true
		};
		processWin();
	};
};

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
	if(availSquaresIdx.length > 1 && playerWin == false){
		//find and move on an open square
		randNum = Math.floor(Math.random() * availSquaresIdx.length);
		var pcMoveIdx = availSquaresIdx[randNum];
		var pcSquare = allSquares[pcMoveIdx];
		//mark square and remove ability for event listener to run again
		pcSquare.textContent = "O";
		logMove(pcMoves, "O");
		winGame(pcMoves);
	};
};

function winGame(moves){
	winStates.forEach(function(innerArr){
		for(var d = 0; d < moves.length; d++){
			// checks for moves in winning config array
			if(moves.includes(innerArr[d])) {
				counter++;
				if(counter == 3){
					aWinner = true;
					winningArray = innerArr;
					//mark winning squares
					for(var e = 0; e < winningArray.length; e++){
						allSquares[winningArray[e]].classList.add("winner");
					};
				};
			};
		};
		counter = 0;
	});
};

function processWin(){
	if(pcWin == true){
		msgText.textContent = "Better Luck Next Time.";
		endGame();
		//update streak
		streakNum = 0;
		streakDisplay.textContent = streakNum;
	}
	else if(playerWin == true){
		msgText.textContent = "You Won!!!";
		endGame();
		//update streak
		streakNum++;
		streakDisplay.textContent = streakNum;
		//update score
		scoreNum++;
		scoreDisplay.textContent = scoreNum;
	}
	else if(availSquaresIdx.length  < 1){
		msgText.textContent = "It's a Tie.";
		//update streak
		streakNum = 0;
		streakDisplay.textContent = streakNum;
	};
};

//disables event listeners from squares
function endGame(){
	for(var i = 0; i < availSquaresIdx.length; i++){
		var idx = availSquaresIdx[i];
		allSquares[idx].classList.remove("available");
		allSquares[idx].textContent = " ";
	};
};
