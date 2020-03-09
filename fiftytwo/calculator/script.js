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
let clearDisplay = false;

addListeners();

function addListeners(){
	for(let i = 0; i < numButtons.length; i++){
		numButtons[i].addEventListener("click", function(){
			if(clearDisplay){
				currDisplay = "";
				displaySpace.innerHTML = currDisplay;
			};
			let oldDisplay = displaySpace.innerHTML;
			currDisplay = oldDisplay + this.id;
			displaySpace.innerHTML = currDisplay;
		});
	};
	for(let i = 0; i < operButtons.length; i++){
		operButtons[i].addEventListener("click", function(){
			if(lastOper.length <= 0 || lastOper === "equal"){
				lastOper = this.id;
				savedNum = currDisplay;
				displaySpace.innerHTML = "";
				console.log("blank");
			} else {
				runCalculation(this.id);
			};
		})
	}
	for(let i = 0; i < tipButtons.length; i++){
		tipButtons[i].addEventListener("click", function(){
			let calcNum;
			if(this.id === "fifteen"){
				calcNum = parseFloat(currDisplay) * .15;
			} else {
				calcNum = parseFloat(currDisplay) * .2;
			};
			currDisplay = calcNum;
			displaySpace.innerHTML = currDisplay;
			clearDisplay = true;
		});
	};
};
function runCalculation(currOper){
	let calcNum;
	if(lastOper === "plus"){
		calcNum = parseFloat(savedNum) + parseFloat(currDisplay);
	} else if(lastOper === "minus"){
		calcNum = parseFloat(savedNum) - parseFloat(currDisplay);
	} else if(lastOper === "multiply"){
		calcNum = parseFloat(savedNum) * parseFloat(currDisplay);
	} else{
		calcNum = parseFloat(savedNum) / parseFloat(currDisplay);
	};
	currDisplay = calcNum;
	displaySpace.innerHTML = currDisplay;
	lastOper = currOper;
	clearDisplay = true;
}
intButton.addEventListener("click", function(){
	if(currDisplay[currDisplay.length - 1] !== "."){
		newDisplay = currDisplay + ".";
		displaySpace.innerHTML = newDisplay;
		currDisplay = newDisplay;
	};
});
clearButton.addEventListener("click", function(){
	currDisplay = "";
	savedNum = "";
	lastOper = "";
	displaySpace.innerHTML = "";
});
eqButton.addEventListener("click", function(){
	lastOper !== "equal" ? runCalculation(this.id) : null;
});
