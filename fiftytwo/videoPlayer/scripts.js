const video = document.querySelector(".video__screen");

const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const ffButton = document.querySelector(".buttons__button--ff");
const rewButton = document.querySelector(".buttons__button--rew");
const volumeBar = document.querySelector(".volume__bar");
const volumeIconMute = document.querySelector(".volume__mute");
const volumeIconAudible = document.querySelector(".volume__audible");
const volumeIndicator = document.querySelector('.volume__bar--indicator');
const progress = document.querySelector('.progress__bar');
const progressBar = document.querySelector('.progress__bar--indicator');


ffButton.addEventListener("click", skip);
playButton.addEventListener("click", togglePlay);
rewButton.addEventListener("click", skip);
video.addEventListener("click",togglePlay);
video.addEventListener("loadedmetadata",updMaxDuration);
video.addEventListener("timeupdate",updProgressBar);
progress.addEventListener("click", function(e){
    let pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
    video.currentTime = pos * video.duration;
});
volumeBar.addEventListener("click", function(e){
    let pos = (e.pageX - this.offsetLeft)/this.offsetWidth;
    pos <= 0.02 ? video.volume = 0 : video.volume = pos;
    if(video.volume === 0 && volumeIconMute.classList.contains("volume__svg--hidden")){
        volumeIconMute.classList.remove("volume__svg--hidden");
        volumeIconAudible.classList.add("volume__svg--hidden");
    } else if(video.volume > 0 && volumeIconAudible.classList.contains("volume__svg--hidden")){
        volumeIconAudible.classList.remove("volume__svg--hidden");
        volumeIconMute.classList.add("volume__svg--hidden");
    };
    updVolumeBar();
})

updVolumeBar();

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
   progressBar.style.width = percentComplete;
};
function updVolumeBar(){
    volumeBar.value = video.volume;
   const percentComplete = Math.floor(video.volume * 100) + '%';
   console.log(percentComplete);
   volumeIndicator.style.width = percentComplete;
};