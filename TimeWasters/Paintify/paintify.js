const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
const colorBtns = document.querySelectorAll(".tools button");
const customColor = document.querySelector("input");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 40;

function changeColor() {
    ctx.strokeStyle = this.id;
    colorBtns.forEach(btn => btn.classList.remove("selected"));
    customColor.classList.remove("selected");
    this.classList.add("selected");
}
function customChangeColor() {
    ctx.strokeStyle = customColor.value;
    colorBtns.forEach(btn => btn.classList.remove("selected"));
    this.classList.add("selected");
}
function draw(e) {
    //stop from running when not clicking
    if(!isDrawing) return;
    //run if mouse clicking/down
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener("mouseout", ()=> isDrawing = false);
canvas.addEventListener("mouseup", ()=> isDrawing = false);
canvas.addEventListener("mousedown", (e)=> {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
colorBtns.forEach(btn => btn.addEventListener("click", changeColor));
customColor.addEventListener("input", customChangeColor);
