//navigation bar script 
const nav      = document.querySelector("nav"),
      topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
      document.body.classList.add("fixed-nav");
      document.body.style.paddingTop = nav.offsetHeight;
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    };
};

window.addEventListener("scroll", fixNav);

//menu flip script
const flipBtn1 = document.querySelector("#flip1"),
      flipBtn2 = document.querySelector("#flip2"),
      menuCard = document.querySelector(".thecard");

function flipMenu(){menuCard.classList.toggle("flip");};

flipBtn1.addEventListener("click", flipMenu);
flipBtn2.addEventListener("click", flipMenu);


//form validations
const emailInput = document.querySelector("#emailInput"),
      nameInput = document.querySelector("#nameInput"),
      phoneInput = document.querySelector("#phoneInput"),
      resInput = document.querySelector("#resDate"),
      emailErr = document.querySelector("#emailErr"),
      dateErr = document.querySelector("#dateErr"),
      formErr = document.querySelector("#formErr"),
      nameErr = document.querySelector("#nameErr"),
      phoneErr = document.querySelector("#phoneErr"),
      submitBtn = document.querySelector("#subBtn");

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

function checkDay() {
  let resDay = new Date(resInput.value).getDay();
  if(resDay >= 1 && resDay <= 6 || resInput.value != ""){
    dateErr.innerHTML = "";
    return true;
  } else if(resDay == 0){
    dateErr.innerHTML = "We are closed on Monday.";
    return false;
  } else {
    dateErr.innerHTML = "Please pick a date.";
    return false;
  };
};

function checkForm(){
  checkDay();
  checkPhone();
    if(checkName() && checkDay() && checkPhone() || checkEmail()){
        dateErr.innerHTML = "";
        emailErr.innerHTML = "";
        nameErr.innerHTML = "";
        phoneErr.innerHTML = "";
        formErr.innerHTML = "This is a mock site, but thanks for testing!";
        return true;
    } else {
        formErr.innerHTML = "Please fix the errors noted above."
        return false;
    };  
};

submitBtn.addEventListener("click", checkForm);

//open/closed status script
const statusMsg = document.querySelector(".openStatus");

function checkOpen() {
  const day = new Date(Date.now()).getDay();
  const hour = new Date(Date.now()).getHours();
  if(day == 1){
    statusMsg.textContent = `Closed`;
  } else if(hour >= 17 && hour <= 23){
      statusMsg.textContent = `Open`;
  } else {statusMsg.textContent = `Closed`;};
};

checkOpen();
