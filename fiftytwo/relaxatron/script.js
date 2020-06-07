const container = document.querySelector('.container');
const text = document.querySelector('.text');

const totalTime = 12000;
const breatheTime = (totalTime / 3);
const holdTime = totalTime / 6;

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = "Breathe In";
    container.className = "container center grow";
    setTimeout(()=> {
        text.innerText = "Hold 1";
        setTimeout(()=> {
            text.innerText = "Breathe Out";
            container.className = "container center shrink";
            setTimeout(()=> {
                text.innerText = "Hold 2";
            }, breatheTime)
        }, holdTime)
    }, breatheTime)
}
setInterval(breatheAnimation, totalTime);