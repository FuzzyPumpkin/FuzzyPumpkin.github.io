const nav = document.querySelector("nav");
const topOfNav = nav.offsetTop;

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

window.addEventListener("scroll", fixNav);