const   player      = document.querySelector(".player"),
        video       = player.querySelector(".viewer"),
        progress    = player.querySelector(".progress"),
        progressBar = player.querySelector(".progress__filled"),
        toggle      = player.querySelector(".toggle"),
        skipButtons = player.querySelectorAll("[data-skip]"),
        ranges      = player.querySelectorAll(".player__slider");

toggle.addEventListener("click", togglePlay);
video.addEventListener("click",togglePlay);
video.addEventListener("play", updButton);
video.addEventListener("pause", updButton);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", rangeUpdate));
video.addEventListener("timeupdate", updProgress);
progress.addEventListener("click", scrub);

function togglePlay(){
    video.paused ? video.play() : video.pause();
};
function updButton(){
    const playIcon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = playIcon;
};
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
};
function rangeUpdate(){
    video[this.name] = this.value;
};
function updProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};