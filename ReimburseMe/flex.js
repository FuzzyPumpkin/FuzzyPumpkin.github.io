const addButton = document.querySelector(".addButton");
const list = document.querySelector("ul");
//need a change handler, I think. As is, it blanks out the lines as it's not storing the values.
//!!! Don't do it this way! Just append a child! 
function createLine (){
    listText = list.innerHTML;
    newItemHTML = `
        <li>
			<input type="date" class="date" name="flexDate"></input>
			<select class="type" name="flexType">
				<option>Medical</option>
				<option>Parking</option>
				<option>Dependent</option>
			</select>
			<input type="text" placeholder="Description" class="desc" name="flexDesc"></input>
			$<input type="number" class="amt" name="flexAmt" value="0"></input>
			<button class="addButton">+</button>
			</li>
    `;
    list.innerHTML = listText + newItemHTML;
    let allAddButtons = document.querySelectorAll(".addButton");
    for(let i = 0; i < allAddButtons.length; i++){
		allAddButtons[i].addEventListener("click", createLine);
	};
}

addButton.addEventListener("click", createLine);