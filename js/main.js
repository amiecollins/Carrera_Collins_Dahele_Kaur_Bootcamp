(() => {

	console.log("javascript enabled");
	
	const lightBox = document.querySelectorAll(".light-box");
	const exitButtons = document.querySelectorAll(".exit-button");
	
    const play = document.querySelector(".play-button");
	const pause = document.querySelector(".pause-button");
	const stop = document.querySelector(".stop-button");
	const rewind = document.querySelector(".rewind-button");
	const fastForward = document.querySelector(".fast-forward-button");
	const volumeUp = document.querySelector(".volume-up-button");
    const volumeDown = document.querySelector(".volume-down-button");
	const videoPlayer = document.querySelector(".video-player");


	function showLightBox() {
		var targetLightBox = lightBox[this.dataset.offset];
		targetLightBox.classList.add('show-box');
	}

	function hideLightBox() {
		for (i = 0; i < lightBox.length; i++0) {
			lightBox[i].classList.remove('show-box');
			stopPressed();
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
		videoPlayer.currentTime = currentTime - 5;
	}

	function fastForwardPressed() {
		videoPlayer.currentTime = currentTime + 5;
	}

	function volumeUpPressed() {
		if (videoPlayer.volume() < 1) {
			videoPlayer.volume(videoPlayer.volume() + 0.1);
		}
	}
	
	function volumeDownPressed() {
		if (videoPlayer.volume() > 0) {
			videoPlayer.volume(videoPlayer.volume() - 0.1);
		}
	}

	exitButtons.forEach(exitButton => exitButton.addEventListener("click", showLightBox));

	play.addEventListener("click", playPressed);
	pause.addEventListener("click", pausePressed);
	stop.addEventListener("click", stopPressed);
	rewind.addEventListener("click", rewindPressed);
	fastforward.addEventListener("click", fastForwardPressed);
	volumeUp.addEventListener("click", volumeUpPressed);
	volumeDown.addEventListener("click", volumeDownPressed);
	
})();