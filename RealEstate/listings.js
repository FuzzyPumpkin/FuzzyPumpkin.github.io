function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -100; 
    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    };
};
function scanDocument() {
    let images = document.querySelectorAll(".hidden");
    images.forEach(function(image) {
        if(isVisible(image)) {
          image.classList.remove("hidden");
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

document.addEventListener("scroll", throttle(scanDocument, 500));


