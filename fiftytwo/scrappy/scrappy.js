const displayList = document.querySelector(".displayList");
const addButton = document.querySelector(".form__addBtn");
const chooseButton = document.querySelector(".choose");
const newColor = document.querySelector(".form__newColor");
const savedColorList = localStorage.savedColorList;
const colorPicker = document.querySelector(".form__colorPicker");
let colorList = [];
const choices = document.querySelector(".choices");


populateFromStorage = (listText) => {
  listText === undefined ? displayList.innerHTML = "" : displayList.innerHTML = listText;
};
populateFromStorage(localStorage.listText);
const delButtons = document.querySelectorAll(".delete");


addButton.addEventListener("click", function(){
    let newElement = document.createElement("li");
    let buttonTag = '<button class="delete" id=' + colorPicker.value + '><svg class="delete__image"><use xlink:href="images/symbol-defs.svg#icon-delete"></use></svg></button>';
    newElement.innerHTML = '<div class="displayList__daub" style="background-color:' + colorPicker.value + '"></div>' + newColor.value + buttonTag; 
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
  choices.innerHTML = '<div class="choices__color" style="background-color:' + firstColor.hex + '">'+ firstColor.color +'</div><div class="choices__color" style="background-color:' + secondColor.hex + '">'+ secondColor.color +'</div>';
});


setupPage = () => {
	for(let i = 0; i < delButtons.length; i++){
		delButtons[i].addEventListener("click", delItem);
	};
  savedColorList === undefined ? colorList = [] : colorList = JSON.parse(savedColorList);
};

setupPage();
