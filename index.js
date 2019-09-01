const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

function toggleOpen(){
    if(!this.classList.contains("open")){
        panels.forEach(panel=> panel.classList.add("closed"));
        panels.forEach(panel=> panel.classList.remove("open"));
        this.classList.remove("closed");
        this.classList.toggle("open");
    }
    else {
        this.classList.remove("open");
        panels.forEach(panel=> panel.classList.remove("closed"));
    };
};




const animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
 const bubblyButtons = document.querySelectorAll("button");
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseover', animateButton, false);
  }