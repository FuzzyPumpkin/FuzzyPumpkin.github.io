//something screwy. Is sliding all out and all back in at the same time instead of one by one!
const images = document.querySelectorAll(".slide-in");
//makes it so function doesn't run constantly, in this case every 20ms
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function checkSlide(e){
      images.forEach(image => {
        //find half-pt of image
        const slideInAt = window.scrollY + window.innerHeight - (image.height / 2);
        //find bottom of image
        const imageBottom = image.offsetTop + image.height;
        //true/false for if half shown but not past viewing
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotPast){
          image.classList.add("active");
        }
        else {
          image.classList.remove("active");
        };
      });
    };

    window.addEventListener("scroll", debounce(checkSlide));