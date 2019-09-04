//PROJECT FLEX PANELS

const bookends = document.querySelectorAll('.projects__bookend');
const projectinfos = document.querySelectorAll('.projects__projectinfo');
const infopanel = document.querySelector('.projects__infopanel');
const closebtns = document.querySelectorAll('.projects__projectinfo-close');

bookends.forEach(bookend => bookend.addEventListener("click", () => toggleOpen(bookend.id)));
closebtns.forEach(btn => btn.addEventListener("click", () => closePanel(btn)));

function toggleOpen(id){
  projectinfos.forEach(function(info){
    if(info.dataset.key === id){
      //if projinfo does not have u-hidden, give to all and remove from infopanel
      if(!info.classList.contains("u-hidden")){
        addHidden();
        infopanel.classList.remove("u-hidden");
      } else {
      //if projinfo has u-hidden, add to all and infopanel and remove from projinfo
        addHidden();
        infopanel.classList.add("u-hidden");
        info.classList.remove("u-hidden");
      };
      
    };
  });
};

function addHidden(){
  projectinfos.forEach(function(info){
    if(!info.classList.contains("u-hidden")){
      info.classList.add("u-hidden");
    };
  });
}

function closePanel(btn){
    btn.parentNode.parentNode.classList.add("u-hidden");
    infopanel.classList.remove("u-hidden");
}


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