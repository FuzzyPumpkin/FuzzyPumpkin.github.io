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