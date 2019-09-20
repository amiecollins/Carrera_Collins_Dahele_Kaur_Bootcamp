import lightBoxData from "./modules/lightboxData.js";

//Sidebar functionality
function toggle() {
    document.getElementById("nav-toggler").classList.toggle("fa-times");
    document.getElementById("nav-toggler").classList.toggle("fa-bars");
    document.getElementById("sidebar").classList.toggle("active");
}

//Home background slideshow
var count = 0;
const bg_classes = ["one", "two", "three", "four"];
const target_id = document.getElementById("bg-change");
slideshow();

function slideshow () {

    if ( count < bg_classes.length ) {
        count++
        target_id.classList.add(bg_classes[count - 1]);
        target_id.classList.remove(bg_classes[count]);
        target_id.classList.remove(bg_classes[count + 1]);
        target_id.classList.remove(bg_classes[count + 2]);
    } else {
        count = 0;  
    }

    setTimeout(slideshow, 10000);
}

// Lightbox & video functionality
(() => {

	console.log("javascript enabled");

	const photos = document.querySelectorAll(".photo")
	const lightBox = document.querySelector(".light-box");
	const name = document.querySelector(".light-box-title");
	const position = document.querySelector(".light-box-subtitle");
	const lightboxPhoto = document.querySelector(".light-box-image")
	const description = document.querySelector(".light-box-description")
	var index = "";

	const exitButton = document.querySelector(".exit-button");

	const videoLocation = document.querySelector(".image-wrapper");
	const play = document.createElement("button");
	play.classList.add("play-button");
	const pause = document.createElement("button");
	pause.classList.add("pause-button");
	const stop = document.createElement("button");
	stop.classList.add("stop-button");
	const rewind = document.createElement("button");
	rewind.classList.add("rewind-button");
	const fastForward = document.createElement("button");
	fastForward.classList.add("fastForward-button");
	const volumeUp = document.createElement("button");
	volumeUp.classList.add("volume-up-button");
    const volumeDown = document.createElement("button");
	volumeDown.classList.add("volume-down-button");
	const videoPlayer = document.createElement("video");
	videoPlayer.classList.add("video-player");
	const controls = document.createElement("div");
	controls.classList.add("video-controls");
	controls.appendChild(play);
	controls.appendChild(pause);
	controls.appendChild(stop);
	controls.appendChild(rewind);
	controls.appendChild(fastForward);
	controls.appendChild(volumeUp);
	controls.appendChild(volumeDown);

	function showLightBox() {
		index = this.dataset.lightbox;
		name.textContent = lightBoxData[index].name;
		position.textContent = lightBoxData[index].role;
		lightboxPhoto.src = lightBoxData[index].photourl;
		lightboxPhoto.alt = lightBoxData[index].name;
		description.textContent = lightBoxData[index].description;
		if (index == "Video") {
			lightboxPhoto.classList.add("hidden");
			videoPlayer.src = lightBoxData[index].photourl;
			videoPlayer.autoplay = true;
			videoLocation.appendChild(videoPlayer);
			videoLocation.appendChild(controls);
		}
		lightBox.classList.add("show-box");
	}

	function hideLightBox() {
		lightBox.classList.remove("show-box");
		if (index == "Video") {
			lightboxPhoto.classList.remove("hidden");
			videoLocation.removeChild(videoPlayer);
			videoLocation.removeChild(controls);
		}
		
	}
	
	function playPressed() {
		  videoPlayer.play();
		  videoPlayer.volume(0.5);
	}

	function pausePressed() {
		videoPlayer.pause(true);
	}

	function stopPressed() {
		 videoPlayer.pause(true);
		 videoPlayer.currentTime = 0;
	}

	function rewindPressed() {
		videoPlayer.currentTime = videoPlayer.currentTime - 2;
	}

	function fastForwardPressed() {
		videoPlayer.currentTime = videoPlayer.currentTime + 2;
	}

	function volumeUpPressed() {
		if (videoPlayer.volume != 1) {
			videoPlayer.volume = videoPlayer.volume + 0.1;
		}
	}
	
	function volumeDownPressed() {
		if (videoPlayer.volume != 0) {
			videoPlayer.volume = videoPlayer.volume - 0.1;
		}
	}
	
    photos.forEach(photo => photo.addEventListener("click", showLightBox));
	exitButton.addEventListener("click", hideLightBox);
	

	play.addEventListener("click", playPressed);
	pause.addEventListener("click", pausePressed);
	stop.addEventListener("click", stopPressed);
	rewind.addEventListener("click", rewindPressed);
	fastForward.addEventListener("click", fastForwardPressed);
	volumeUp.addEventListener("click", volumeUpPressed);
	volumeDown.addEventListener("click", volumeDownPressed);
	
})();