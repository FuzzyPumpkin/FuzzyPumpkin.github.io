const nav = document.querySelector("nav");
const topOfNav = nav.offsetTop;
const flipBtn1 = document.querySelector("#flip1");
const flipBtn2 = document.querySelector("#flip2");
const menuCard = document.querySelector(".thecard");

function fixNav(){
    if(window.scrollY >= topOfNav){
      document.body.classList.add("fixed-nav");
      //set padding so it doesn't move in a jarring manner when nav is pulled from page content
      document.body.style.paddingTop = nav.offsetHeight;
    } else {
      //so it pops back when you scroll all the way up
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    };
};

function flipMenu(){
  menuCard.classList.toggle("flip");
};

window.addEventListener("scroll", fixNav);
flipBtn1.addEventListener("click", flipMenu);
flipBtn2.addEventListener("click", flipMenu);