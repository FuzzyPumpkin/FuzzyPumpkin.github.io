const signupBtn = document.querySelectorAll(".btn--signup");
const form = document.querySelector(".form");
const closeBtn = document.querySelector(".form__close");

for(let i = 0; i < 3; i++){
    signupBtn[i].addEventListener("click", toggleForm);
};
closeBtn.addEventListener("click", toggleForm);

function toggleForm(){
    form.classList.toggle("show");
};

