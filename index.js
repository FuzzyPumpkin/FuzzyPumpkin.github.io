//PROJECT FLEX PANELS
const bookends = document.querySelectorAll('.projects__bookend');
const projectinfos = document.querySelectorAll('.projects__projectinfo');
const infopanel = document.querySelector('.projects__infopanel');

bookends.forEach(bookend => bookend.addEventListener("click", () => toggleOpen(bookend.id)));

function toggleOpen(id){
  projectinfos.forEach(function(info){
    if(info.dataset.key === id){
      console.log(info.dataset.key);
      //if projinfo has display class, remove from all and give to infopanel
      //if projinfo does not have display class, remove from all and give to projinfo
    };
  });
};


//SPARKLY BUTTONS
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