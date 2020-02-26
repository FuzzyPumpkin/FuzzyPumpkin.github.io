const numButtons = document.querySelectorAll(".buttons__button_green");
const operButtons = document.querySelectorAll(".buttons__button_red");
const intButton = document.querySelector("#point");
const eqButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const tipButtons = document.querySelectorAll(".buttons__button_blue");
const displaySpace = document.querySelector(".calculator__display");

addListeners();

function addListeners(){
	for(let i = 0; i < numButtons.length; i++){
		numButtons[i].addEventListener("click", function(){
			oldDisplay = displaySpace.innerHTML;
			displaySpace.innerHTML = oldDisplay + this.id;
		});
	};
};
intButton.addEventListener("click", function(){
	oldDisplay = displaySpace.innerHTML;
	displaySpace.innerHTML = oldDisplay + ".";
})
clearButton.addEventListener("click", function(){
	displaySpace.innerHTML = "";
})
