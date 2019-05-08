const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

function toggleOpen(){
    if(!this.classList.contains("open")){
        panels.forEach(panel=> panel.classList.add("closed"));
        panels.forEach(panel=> panel.classList.remove("open"));
        this.classList.remove("closed");
        this.classList.toggle("open");
    }
    else {
        this.classList.remove("open");
        panels.forEach(panel=> panel.classList.remove("closed"));
    };
};
