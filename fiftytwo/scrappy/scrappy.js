const addButton = document.querySelector(".form__addBtn");
const choices = document.querySelector(".choices");
const chooseButton = document.querySelector(".choose");
let colorList = [];
const colorPicker = document.querySelector(".form__colorPicker");
const displayList = document.querySelector(".displayList");
const newColor = document.querySelector(".form__newColor");
const savedColorList = localStorage.savedColorList;


addColor = (color) => {
  let newElement = document.createElement("li");
  let buttonTag = '<button class="delete" id=' + color.color + '><svg class="delete__image"><use xlink:href="images/symbol-defs.svg#icon-delete"></use></svg></button>';
  newElement.innerHTML = '<div class="displayList__daub" style="background-color:' + color.hex + '"></div>' + color.color + buttonTag; 
  newElement.accessKey = color.color;
  newElement.childNodes[1].addEventListener("click", delItem);
  displayList.appendChild(newElement);
}

populateFromStorage = () => {
  if(localStorage.savedColorList != undefined){
    let storedColorList = JSON.parse(localStorage.savedColorList);
    for(let i = 0; i < storedColorList.length; i++){
      addColor(storedColorList[i]);
    };
    colorList = storedColorList;
  };
  const delButtons = document.querySelectorAll(".delete");
  for(let i = 0; i < delButtons.length; i++){
    delButtons[i].addEventListener("click", delItem);
  };
};
populateFromStorage();


addButton.addEventListener("click", function(){
    newColorToAdd = {hex: colorPicker.value, color: newColor.value};
    addColor(newColorToAdd);
    colorList.push(newColorToAdd);
    newColor.value = "";
    localStorage.savedColorList = JSON.stringify(colorList);
});

function delItem(){
  console.log("delete fired");
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