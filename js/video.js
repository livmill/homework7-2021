var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// for applying volume change to video
	var volumeVal = document.querySelector("#slider").value;
	video.volume = volumeVal / 100;
	volume.innerHTML = (volumeVal + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down 5%. New speed is " + video.defaultPlaybackRate);
	video.defaultPlaybackRate -= 0.05;
	video.load();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up 5%. New speed is " + video.defaultPlaybackRate);
	video.defaultPlaybackRate += 0.05;
	video.load();
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping Ahead 15 seconds to " + video.currentTime);
	video.currentTime += 15;
	if (video.currentTime == video.duration) {
		video.play();
	};
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.load();
	if (video.muted === false) {
		var button = document.getElementById("mute");
		button.value = 'Unmute';
		button.innerHTML = 'Unmute';
		video.muted = true;
	}
	else {
		var button = document.getElementById("mute");
		button.value = 'Mute';
		button.innerHTML = 'Mute';
		video.muted = false;
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing video volume")
	var volumeVal = document.querySelector("#slider").value;
	video.volume = volumeVal / 100;
	console.log("This is the volume of the video: " + (video.volume * 100) + "%");
	volume.innerHTML = volumeVal + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changed to vintage style");
	video.classList.add("oldSchool");
	video.load();
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changed back to original style");
	video.classList.remove("oldSchool");
	video.load();
});