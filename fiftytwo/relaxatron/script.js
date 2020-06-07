const container = document.querySelector('.circle__container');
const text = document.querySelector('.circle__text');
const visualizationText = document.querySelector('.visualization__text');
const visualizationBg = document.querySelector('body');
const totalTime = 12000;
const breatheTime = (totalTime / 3);
const holdTime = totalTime / 6;
let visualizationNumber = 1;

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = "Breathe In";
    container.className = "circle__container center grow";
    if(visualizationNumber === 1){
        visualizationText.innerText = "Puppies";
        visualizationBg.className = "center background--puppy";
        } else if(visualizationNumber === 2){
            visualizationText.innerText = "Comfy Blankets";
            visualizationBg.className = "center background--blankets";
        }
        else if(visualizationNumber === 3){
            visualizationText.innerText = "Chocolate";
            visualizationBg.className = "center background--chocolate";
        }
        else if(visualizationNumber === 4){
            visualizationText.innerText = "Kitties";
            visualizationBg.className = "center background--kitty";
        }
        else if(visualizationNumber === 5){
            visualizationText.innerText = "Rainbows";
            visualizationBg.className = "center background--rainbow";
        }
        else{
            visualizationText.innerText = "Laughter";
            visualizationBg.className = "center background--laugh";
            visualizationNumber = 0;
        }
    visualizationNumber++;
    setTimeout(()=> {
        text.innerText = "Hold 1";
        setTimeout(()=> {
            text.innerText = "Breathe Out";
            container.className = "circle__container center shrink";
            setTimeout(()=> {
                text.innerText = "Hold 2";
            }, breatheTime)
        }, holdTime)
    }, breatheTime)
}
setInterval(breatheAnimation, totalTime);