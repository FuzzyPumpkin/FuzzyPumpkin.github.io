const video = document.querySelector(".video__screen");

const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const ffButton = document.querySelector(".buttons__button--ff");
const rewButton = document.querySelector(".buttons__button--rew");
const volumeBar = document.querySelector(".volume__bar");
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress__bar--indicator');


playButton.addEventListener("click", togglePlay);
video.addEventListener("click",togglePlay);
video.addEventListener("loadedmetadata",updMaxDuration);
video.addEventListener("timeupdate",updProgressBar);
ffButton.addEventListener("click", skip);
rewButton.addEventListener("click", skip);

function togglePlay(){
    video.paused ? video.play() : video.pause();
    playIcon.classList.toggle("buttons__svg--hidden");
    pauseIcon.classList.toggle("buttons__svg--hidden");
    playButton.classList.toggle("buttons__playButton--pause");
};

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
};
function updMaxDuration(){
    progress.setAttribute('max', video.duration);
};
function updProgressBar(){
    if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
   progress.value = video.currentTime;
   const percentComplete = Math.floor((video.currentTime / video.duration) * 100) + '%';
   console.log(percentComplete);
   progressBar.style.width = percentComplete;
};

// function updProgress(){
//     const percent = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${percent}%`;
// };
// function scrub(e){
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// };