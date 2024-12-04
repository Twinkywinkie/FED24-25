// JavaScript Document
console.log("hi");

const deVideo = document.querySelector("video");

const deVideoButton = document.querySelector("main section:nth-of-type(1) button");

deVideoButton.onclick = toggleVideo;

function toggleVideo() {
    if(deVideo.paused){
        deVideo.play();
    }else{
        deVideo.pause();
    }
}