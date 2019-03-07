/* General notes:
DONE Be able to add list items.
DONE List items should fade and cross off when clicked.
DONE Deleting items 
DONE Need a whole-list delete button.
DONE Categories? And organization by them. Want a drop-down with 
	but the ability to add new ones.
Saving list? Probably need back-end. */

//check for webstorage
if (window.localStorage !== "undefined") {
  document.querySelector("body").innerHTML = localStorage.pageContent;
} else {
  console.log("No web storage");
};


var editInput = document.querySelector(".newItem");
var editButton = document.querySelector(".edit");
var newCatButton = document.querySelector(".editCategory");
var catSelector = document.querySelector("select");
var catInput = document.querySelector(".newCategory");
var catList = document.querySelector("#categoryChoice");
var fullList = document.querySelector(".fullList");
var delAll = document.querySelector(".delAll");
var dupeAlert = document.querySelector(".alert");
var counter = 0;

//add new items
editButton.addEventListener("click", function(){
    var newElement = document.createElement("li");
	var html = '<button class="delete">delete</button>';
	var newElCategory = document.querySelector("select").value;
    newElement.innerHTML = editInput.value + " " + html; 
	newElement.setAttribute("id", newElCategory);
	//eventListeners
	newElement.addEventListener("click", toggleItem)
	newElement.childNodes[1].addEventListener("click", delItem);
	
	//check to see if category already exists
	var listCats = document.querySelectorAll("h2");
	var listCatsUL = document.querySelectorAll("ul");
	var listCatIdx = 0
	
	for(i = 0; i < listCats.length; i++){
		if (newElCategory == listCats[i].innerHTML){
			counter++;
			//set index of existing ul
			listCatIdx = i;
		};
	};
	if(counter == 0){
		//add a new sub-list if not currently there
		var newCatList = document.createElement("ul");
		newCatList.innerHTML = '<h2>' + newElCategory + '</h2>';
		fullList.appendChild(newCatList);
		//put list item in that sub-list
		newCatList.appendChild(newElement);
	}
	else {
		//put in existing sub-list
		listCatsUL[listCatIdx].appendChild(newElement);
		//return counters to zero
		counter = 0;
		listCatIdx = 0;
	};
	//clear input field
	editInput.value = "";
	updStore();
});

//check off an item
function toggleItem(){
	this.classList.toggle("checkedOff");
	updStore();
}

//delete one item
function delItem(){
	this.parentNode.parentNode.removeChild(this.parentNode);
	updStore();
}

//delete whole list
delAll.addEventListener("click", function(){
	fullList.textContent = " ";
	updStore();
});

//add new category
newCatButton.addEventListener("click", function(){
	var currCat = document.querySelectorAll("option");
	//increment counter to check for match to current categories
	for(i = 0; i < currCat.length; i++){
		if(catInput.value == currCat[i].value){
			counter++;
		};
	};
	//add to category list if not currently there
	if(counter == 0){
		var newCat = document.createElement("option");
		newCat.innerHTML = catInput.value;
		catSelector.appendChild(newCat);
		//clear input field
		catInput.value = "";
	}
	// return counter to zero after checks are done.
	else {
		dupeAlert.innerHTML = "This category already exists!";
		setTimeout(function(){
			dupeAlert.innerHTML = "";
			}, 3000)
		;
		counter = 0;
	};
	updStore();
});

function updStore(){
	localStorage.pageContent = document.querySelector("body").innerHTML;
};
