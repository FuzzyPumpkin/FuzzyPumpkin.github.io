const numButtons = document.querySelectorAll(".buttons__button_green");
const operButtons = document.querySelectorAll(".buttons__button_red");
const intButton = document.querySelector("#point");
const eqButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const tipButtons = document.querySelectorAll(".buttons__button_blue");
const displaySpace = document.querySelector(".calculator__display");

let currDisplay = "";
let savedNum = "";
let lastOper = "";

addListeners();

function addListeners(){
	for(let i = 0; i < numButtons.length; i++){
		numButtons[i].addEventListener("click", function(){
			let oldDisplay = displaySpace.innerHTML;
			currDisplay = oldDisplay + this.id;
			displaySpace.innerHTML = currDisplay;
			//problem. If display is showing result of a calculation (but no equal), adds number to that result 
			//instead of clearing.
		});
	};
	for(let i = 0; i < operButtons.length; i++){
		operButtons[i].addEventListener("click", function(){
			if(lastOper.length <= 0){
				lastOper = this.id;
				savedNum = currDisplay;
				displaySpace.innerHTML = "";
				console.log("blank");
			} else {
				runCalculation(this.id);
			}
		})
	}
};
function runCalculation(currOper){
	let calcNum;
	if(lastOper === "plus"){
		calcNum = parseInt(savedNum) + parseInt(currDisplay);
	} else if(lastOper === "minus"){
		calcNum = parseInt(savedNum) - parseInt(currDisplay);
	} else if(lastOper === "multiply"){
		calcNum = parseInt(savedNum) * parseInt(currDisplay);
	} else{
		calcNum = parseInt(savedNum) / parseInt(currDisplay);
	}
	currDisplay = calcNum;
	displaySpace.innerHTML = currDisplay;
	lastOper = currOper;
}
intButton.addEventListener("click", function(){
	oldDisplay = currDisplay + ".";
	displaySpace.innerHTML = currDisplay;
})
clearButton.addEventListener("click", function(){
	currDisplay = "";
	savedNum = "";
	lastOper = "";
	displaySpace.innerHTML = "";
})
