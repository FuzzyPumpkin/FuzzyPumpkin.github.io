const signupBtn = document.querySelectorAll(".btn--signup");
const form = document.querySelector(".form");
//fix this ---ran out of time on lunch. Needs to be a forEach since there are 3 buttons.
signupBtn.addEventListener("click", openForm);

function openForm(){
    form.classList.toggle("show");
}

