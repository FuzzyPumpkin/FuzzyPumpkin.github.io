//decision maker
const   flipBtn = document.querySelector(".flip__button"),
        thumbUp = document.querySelector("#thumbUp"),
        thumbDown = document.querySelector("#thumbDown");

function pickOne(){
    let randomVal = Math.floor(Math.random() *2);
    if(randomVal === 1){
        thumbDown.classList.remove("green");
        if(!thumbUp.classList.contains("green")){thumbUp.classList.add("green");};  
    } else {
        thumbUp.classList.remove("green");
        if(!thumbDown.classList.contains("green")){thumbDown.classList.add("green");};
    };
    console.log(randomVal);
}

flipBtn.addEventListener("click", pickOne);
//calculator
const oneBtn = document.querySelector("#num1"),
    twoBtn = document.querySelector("#num2"),
    threeBtn = document.querySelector("#num3"),
    fourBtn = document.querySelector("#num4"),
    fiveBtn = document.querySelector("#num5"),
    sixBtn = document.querySelector("#num6"),
    sevenBtn = document.querySelector("#num7"),
    eightBtn = document.querySelector("#num8"),
    nineBtn = document.querySelector("#num9"),
    zeroBtn = document.querySelector("#num0"),
    plusBtn = document.querySelector("#plus"),
    minusBtn = document.querySelector("#minus"),
    divideBtn = document.querySelector("#divis"),
    multiBtn = document.querySelector("#multi"),
    equalBtn = document.querySelector("#equal"),
    decBtn = document.querySelector("#dec"),
    clearBtn = document.querySelector("#clear"),
    fifteenBtn = document.querySelector("#fifteen"),
    twentyBtn = document.querySelector("#twenty"),
    resultDisp = document.querySelector("#window");
let runningTotal = 0;
let lastOperator = "";
let clearDisplay = false;

function dispNum(num){
    if(clearDisplay == true){
        resultDisp.innerHTML = num;
        clearDisplay = false;
    } else if(resultDisp.innerHTML.length <= 10){
        resultDisp.innerHTML = resultDisp.innerHTML + num;
    };
};

function clearDisp(){
    resultDisp.innerHTML = "";
    runningTotal = 0;
};

function calcOperation(oper){
    console.log(oper);
    if(lastOperator == "plus"){
        runningTotal = runningTotal + parseFloat(resultDisp.innerHTML);
    } else if(lastOperator == "minus"){
        runningTotal = runningTotal - parseFloat(resultDisp.innerHTML);
    } else if(lastOperator == "divide"){
        runningTotal = runningTotal / parseFloat(resultDisp.innerHTML);
    } else if(lastOperator == "multi"){
        runningTotal = runningTotal * parseFloat(resultDisp.innerHTML);
    } else{
        runningTotal = parseFloat(resultDisp.innerHTML);
    };
    resultDisp.innerHTML = runningTotal;
    lastOperator = oper;
    clearDisplay = true;
};

function tipCalc(num){
    runningTotal = parseFloat(resultDisp.innerHTML).toFixed(2);
    runningTotal = ((runningTotal * num) / 100).toFixed(2);
    resultDisp.innerHTML = runningTotal;
};

oneBtn.addEventListener("click", function(){dispNum(1);});//called through anon func to prevent immediate call
twoBtn.addEventListener("click", function(){dispNum(2);});
threeBtn.addEventListener("click", function(){dispNum(3);});
fourBtn.addEventListener("click", function(){dispNum(4);});
fiveBtn.addEventListener("click", function(){dispNum(5);});
sixBtn.addEventListener("click", function(){dispNum(6);});
sevenBtn.addEventListener("click", function(){dispNum(7);});
eightBtn.addEventListener("click", function(){dispNum(8);});
nineBtn.addEventListener("click", function(){dispNum(9);});
zeroBtn.addEventListener("click", function(){dispNum(0);});
decBtn.addEventListener("click", function(){dispNum(".");});
clearBtn.addEventListener("click", clearDisp);
plusBtn.addEventListener("click", function(){calcOperation("plus");});
minusBtn.addEventListener("click", function(){calcOperation("minus");});
divideBtn.addEventListener("click", function(){calcOperation("divide");});
multiBtn.addEventListener("click", function(){calcOperation("multi");});
equalBtn.addEventListener("click", function(){calcOperation("equal");});
fifteenBtn.addEventListener("click", function(){tipCalc(15);});
twentyBtn.addEventListener("click", function(){tipCalc(20);});

//task list
    //temp for testing
const delBtn = document.querySelectorAll(".full-tasks__trash");
for(let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click", deleteTask);
}


const   newInput = document.querySelector(".full-tasks__taskEntry"),
        todoList = document.querySelector(".full-tasks__list--todo"),
        completeList = document.querySelector(".full-tasks__list--complete"),
        addBtn = document.querySelector(".full-tasks__addBtn");

function deleteTask(){
//need to prevent the bubbling
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function addTask(newElement, taskFunct, listName){
    newElement.classList.add("full-tasks__list-item");
    newElement.addEventListener("click", taskFunct);
    newElement.childNodes[1].addEventListener("click", deleteTask);
    listName.appendChild(newElement);
}
function toggleItem(){
    let newElement = document.createElement("li");
    newElement.innerHTML = this.innerHTML;
    this.parentNode.removeChild(this);
    addTask(newElement, completeTask, todoList);
}

function newTask(){
    let newElement = document.createElement("li");
	let html = '<svg class="full-tasks__trash"><use xlink:href="images/symbol-defs.svg#icon-close"></use></svg>';
    newElement.innerHTML = newInput.value + html; 
    addTask(newElement, completeTask, todoList);
}

function completeTask(){ 
    let newElement = document.createElement("li");
    newElement.innerHTML = this.innerHTML;
    this.parentNode.removeChild(this);
    addTask(newElement, deleteTask, completeList);
    //something wrong...event listeners not assigning/firing
}

addBtn.addEventListener("click", newTask);