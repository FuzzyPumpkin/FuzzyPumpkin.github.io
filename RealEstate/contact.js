const nameInput = document.querySelector("#nameInput"),
      emailInput = document.querySelector("#emailInput"),
      phoneInput = document.querySelector("#phoneInput"),
      submitBtn = document.querySelector("button"),
      nameErr = document.querySelector("#nameErr"),
      emailErr = document.querySelector("#emailErr"),
      phoneErr = document.querySelector("#phoneErr"),
      formErr = document.querySelector("#formErr");

function checkName(){
    if(nameInput.value.search(/[0-9]/g) > 0){
        nameErr.innerHTML = "Name must not contain numbers.";
        return false;
    } else if(nameInput.value.length < 3){
        nameErr.innerHTML = "Name is too short.";
        return false;
    } else {
        nameErr.innerHTML = "";
        return true;
    };
};

function checkPhone(){
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneInput.value.match(phoneRegex)){
        phoneErr.innerHTML = "";
        return true;
    } else {
        phoneErr.innerHTML = "Not a valid phone number."
        return false;
    };
};

function checkEmail(){
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailRegex.test(emailInput.value)){
        emailErr.innerHTML = "Not a valid email address.";
        return false;
    } else {
        emailErr.innerHTML = "";
        return true;
    };
};

function checkForm(){
    if(checkName() && checkPhone() || checkEmail()){
        nameErr.innerHTML = "";
        phoneErr.innerHTML = "";
        emailErr.innerHTML = "";
        formErr.innerHTML = "This is a mock site, but thanks for testing!";
        return true;
    } else {
        formErr.innerHTML = "Please include a name and a way to contact you!"
        return false;
    };
    
};

submitBtn.addEventListener("click", checkForm);