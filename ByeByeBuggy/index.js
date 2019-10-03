// Navigation logo display
const secondScreen = document.querySelector(".product");
const logo = document.querySelector(".navigation__logo");

function isVisible() {
    let displayHeight = secondScreen.getBoundingClientRect().top;
    console.log(displayHeight);
    if(displayHeight < 100) {
        logo.classList.add("shown");
    };
};

function throttle(functIn, waitTime) {
    let time = Date.now();
    return function() {
      if ((time + waitTime - Date.now()) < 0) {
        functIn();
        time = Date.now();
        };
      };
  };
  
document.addEventListener("scroll", throttle(isVisible, 500));
// Product features popups
const buttons = document.querySelectorAll(".product__icon");
const messages = document.querySelectorAll(".product__part");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => messageDisplay(i));
}

function messageDisplay(i){
    messages.forEach(function(message){
        if(!message.classList.contains("hidden")){
            message.classList.add("hidden");
        }   
    });
    messages[i].classList.remove("hidden");
}