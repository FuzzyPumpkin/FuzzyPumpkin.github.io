const video = document.querySelector(".video__screen");

const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const ffButton = document.querySelector(".buttons__button--ff");
const rewButton = document.querySelector(".buttons__button--rew");
const volumeBar = document.querySelector(".volume__bar");
const progressBar = document.querySelector(".progress__bar");
// const progress = player.querySelector(".progress");
// const progressBar = player.querySelector(".progress__filled");
// const ranges = player.querySelectorAll(".player__slider");

playButton.addEventListener("click", togglePlay);
video.addEventListener("click",togglePlay);
ffButton.addEventListener("click", skip);
rewButton.addEventListener("click", skip);
// ranges.forEach(range => range.addEventListener("change", rangeUpdate));
// video.addEventListener("timeupdate", updProgress);
// progress.addEventListener("click", scrub);

function togglePlay(){
    video.paused ? video.play() : video.pause();
    playIcon.classList.toggle("buttons__svg--hidden");
    pauseIcon.classList.toggle("buttons__svg--hidden");
    playButton.classList.toggle("buttons__playButton--pause");
};

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
};
// function rangeUpdate(){
//     video[this.name] = this.value;
// };
// function updProgress(){
//     const percent = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${percent}%`;
// };
// function scrub(e){
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// };