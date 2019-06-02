//navigation bar script 
const nav      = document.querySelector("nav"),
      topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
      document.body.classList.add("fixed-nav");
      document.body.style.paddingTop = nav.offsetHeight;
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    };
};

window.addEventListener("scroll", fixNav);

//menu flip script
const flipBtn1 = document.querySelector("#flip1"),
      flipBtn2 = document.querySelector("#flip2"),
      menuCard = document.querySelector(".thecard");

function flipMenu(){menuCard.classList.toggle("flip");};

flipBtn1.addEventListener("click", flipMenu);
flipBtn2.addEventListener("click", flipMenu);

//open/closed status script
const statusMsg = document.querySelector(".openStatus");

function checkOpen() {
  const day = new Date(Date.now()).getDay();
  const hour = new Date(Date.now()).getHours();
  if(day >= 1 && day <=6 && hour >= 17 && hour <= 23){
      statusMsg.textContent = `Open`;
  } else {statusMsg.textContent = `Closed`;};
};

checkOpen();