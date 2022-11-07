var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
  
  // variables for all the buttons/interactable elements
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const slowerBtn = document.getElementById("slower");
  const fasterBtn = document.getElementById("faster");
  const skipBtn = document.getElementById("skip");
  
  const muteBtn = document.getElementById("mute");
  
  var slider = document.getElementById("slider");
  var volume = document.getElementById("volume");
  
  const vintageBtn = document.getElementById("vintage");
  const origBtn = document.getElementById("orig");
  
  // event listeners
  playBtn.addEventListener("click", () => {
	video.play();
	volume.innerText = slider.value + "%";
	console.log("Play Video");
  });
  
  pauseBtn.addEventListener("click", () => {
	video.pause();
	console.log("Pause Video");
  });
  
  slowerBtn.addEventListener("click", () => {
	let speed = video.playbackRate;
	let new_speed = speed - speed * 0.05;
	video.playbackRate = new_speed;
	console.log(new_speed);
  });
  
  fasterBtn.addEventListener("click", () => {
	let speed = video.playbackRate;
	let new_speed = speed + (speed * 1.0526) * 0.05;
	video.playbackRate = new_speed;
	console.log(new_speed);
  });
  
  skipBtn.addEventListener("click", () => {
	console.log("Original location", video.currentTime);
	let newTime = video.currentTime + 15;
  
	// skipTime is over actual video length --> go back to beginning of video
	if (newTime > video.duration) {
	  video.currentTime = 0;
	  console.log("Going back to beginning");
	} else {
	  video.currentTime = newTime;
	}
	console.log("New location", video.currentTime);
  });
  
  muteBtn.addEventListener("click", () => {
	if (video.muted === false) {
	  video.muted = true;
	  muteBtn.innerText = "Unmute";
	} else {
	  video.muted = false;
	  muteBtn.innerText = "Mute";
	}
  });
  
  slider.addEventListener("change", () => {
	let decimal_volume = slider.value * 0.01;
	video.volume = decimal_volume;
	volume.innerText = slider.value + "%";
	console.log(decimal_volume);
  });
  
  vintageBtn.addEventListener("click", () => {
	video.classList.add("oldSchool");
  });
  
  origBtn.addEventListener("click", () => {
	video.classList.remove("oldSchool");
  });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

