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

//SKILLS FADE-IN
function isVisible(element) {
  let elementBox = element.getBoundingClientRect();
  let distanceFromBottom = 50; 
  if(elementBox.bottom - window.innerHeight < distanceFromBottom) {
      return true;
  } else {
      return false;
  };
};
function scanDocument() {
  let skills = document.querySelectorAll(".skills__skill");
  skills.forEach(function(skill) {
      if(isVisible(skill)) {
        skill.classList.remove("skills__hidden");
      };
  });
}
function throttle(functIn, waitTime) {
let time = Date.now();
return function() {
  if ((time + waitTime - Date.now()) < 0) {
    functIn();
    time = Date.now();
    }
  }
}

document.addEventListener("scroll", throttle(scanDocument, 200));