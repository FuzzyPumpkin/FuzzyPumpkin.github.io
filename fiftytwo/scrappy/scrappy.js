const displayList = document.querySelector(".displayList");
const addButton = document.querySelector(".add");
const chooseButton = document.querySelector(".choose");
const newColor = document.querySelector(".newColor");
const savedColorList = localStorage.savedColorList;
let colorList = [];
const choices = document.querySelector(".choices");

addButton.addEventListener("click", function(){
    let newElement = document.createElement("li");
    let buttonTag = '<button class="delete">del</button>';
    newElement.innerHTML = newColor.value + " " + buttonTag; 
    newElement.accessKey = newColor.value;
    newElement.childNodes[1].addEventListener("click", delItem);
    colorList.push(newColor.value)
    displayList.appendChild(newElement);
    newColor.value = "";
    localStorage.savedColorList = JSON.stringify(colorList);
    localStorage.listText = displayList.innerHTML;
});
function delItem(){
	this.parentNode.parentNode.removeChild(this.parentNode);
  let updatedColorList = colorList.filter(color => color !== this.parentNode.accessKey);
	localStorage.savedColorList = JSON.stringify(updatedColorList);
  localStorage.listText = displayList.innerHTML;
  colorList = updatedColorList;
}
populateFromStorage = (listText) => {
  listText === undefined ? displayList.innerHTML = "" : displayList.innerHTML = listText;
};

chooseButton.addEventListener("click", function(){
  let firstColor = colorList[Math.floor(Math.random() * colorList.length)];
  let secondColor = colorList[Math.floor(Math.random() * colorList.length)];
  choices.innerHTML = firstColor + " + " + secondColor;
});

populateFromStorage(localStorage.listText);

