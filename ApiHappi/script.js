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

function dispNum(num){
    if(resultDisp.innerHTML.length <= 10){
        resultDisp.innerHTML = resultDisp.innerHTML + num;}
};

function clearDisp(){
    resultDisp.innerHTML = "";
    runningTotal = 0;
};

function calcOperation(oper){
    lastOper = oper;
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
fifteenBtn.addEventListener("click", function(){tipCalc(15);});
twentyBtn.addEventListener("click", function(){tipCalc(20);});