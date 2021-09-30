const displayList = document.querySelector(".displayList");
const addButton = document.querySelector(".add");
const chooseButton = document.querySelector(".choose");
const newColor = document.querySelector(".newColor");
const savedColorList = localStorage.savedColorList;
const colorPicker = document.querySelector(".colorPicker");
let colorList = [];
const choices = document.querySelector(".choices");


populateFromStorage = (listText) => {
  listText === undefined ? displayList.innerHTML = "" : displayList.innerHTML = listText;
};
populateFromStorage(localStorage.listText);
const delButtons = document.querySelectorAll(".delete");


addButton.addEventListener("click", function(){
    let newElement = document.createElement("li");
    let buttonTag = '<button class="delete" id=' + colorPicker.value + '>del</button>';
    newElement.innerHTML = newColor.value + " " + buttonTag; 
    newElement.accessKey = newColor.value;
    newElement.childNodes[1].addEventListener("click", delItem);
    colorList.push({hex: colorPicker.value, color: newColor.value});
    displayList.appendChild(newElement);
    newColor.value = "";
    localStorage.savedColorList = JSON.stringify(colorList);
    localStorage.listText = displayList.innerHTML;
});
function delItem(){
	this.parentNode.parentNode.removeChild(this.parentNode);
  let updatedColorList = colorList.filter(color => color.color !== this.parentNode.accessKey);
	localStorage.savedColorList = JSON.stringify(updatedColorList);
  localStorage.listText = displayList.innerHTML;
  colorList = updatedColorList;
}


chooseButton.addEventListener("click", function(){
  let firstColor = colorList[Math.floor(Math.random() * colorList.length)];
  let secondColor = colorList[Math.floor(Math.random() * colorList.length)];
  choices.innerHTML = firstColor.color + " + " + secondColor.color;
});


setupPage = () => {
	for(let i = 0; i < delButtons.length; i++){
		delButtons[i].addEventListener("click", delItem);
	};
  savedColorList === undefined ? colorList = [] : colorList = JSON.parse(savedColorList);
};

setupPage();
