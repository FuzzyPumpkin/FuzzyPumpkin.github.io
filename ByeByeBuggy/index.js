const buttons = document.querySelectorAll(".product__icon");
const messages = document.querySelectorAll(".product__part");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => messageDisplay(i));
}

function messageDisplay(i){
    messages.forEach(function(message){
        if(!message.classList.contains("hidden")){
            message.classList.add("hidden");
        }   
    });
    messages[i].classList.remove("hidden");
}