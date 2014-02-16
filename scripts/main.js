navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: false, video: true};
var video = document.querySelector("video");

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
  video.play();
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}


// awesome javascript goes here
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    if(navigator.getUserMedia){
		navigator.getUserMedia(constraints, successCallback, errorCallback);
    }else{
    	alert("You can't use it!");
    }
},false)