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

//Lightbox functionality
(() => {

	console.log("javascript enabled");

	const photos = document.querySelectorAll(".photo")
	const lightBox = document.querySelector(".light-box");
	const name = document.querySelector(".name");
	const position = document.querySelector(".position");
	const lightboxPhoto = document.querySelector(".light-box-photo")
	const description = document.querySelector(".light-box-description")
	const exitButtons = docume1nt.querySelectorAll(".exit-button");

	const lightBoxData = [
		[`Walter Carrera`, `Front-End Developer`, `photoURL`, `Bio`],
		[`Harwinder Dahele`, `Motion Designer`, `photoURL`, `Bio`],
		[`Amie Collins`, `Project Manager`, `photoURL`, `Bio`],
		[`Prabhjot Kaur`, `Motion Designer`, `photoURL`, `Bio`],
		[`Prabhjot Kaur`, `Graphic Designer`, `photoURL`, `Bio`],
		[`Text-A-Taxi`, `Local Taxi Catalogue and Review`, `photoURL`, `Text-A-Taxi started as a passion project for our client and gained users quickly, the app was originally servicing only large cities in Ontario but with the help of us they have been able to provide taxi information for all of Canada. We revamped their logo as well as their app, adding new features such as auto-calling and auto-texting within the app and a favorite taxi option to save your favorite local taxis.`]
	];
	
    const play = document.querySelector(".play-button");
	const pause = document.querySelector(".pause-button");
	const stop = document.querySelector(".stop-button");
	const rewind = document.querySelector(".rewind-button");
	const fastForward = document.querySelector(".fast-forward-button");
	const volumeUp = document.querySelector(".volume-up-button");
    const volumeDown = document.querySelector(".volume-down-button");
	const videoPlayer = document.querySelector(".video-player");


	function showLightBox() {
		lightBox.classList.add('show-box');
		name.textContent = lightBoxData[this.dataset.offset][0];
		position.textContent = lightBoxData[this.dataset.offset][1];
		lightboxPhoto.src = lightBoxData[this.dataset.offset][2];
		description.textContent = lightBoxData[this.dataset.offset][3];
	}

	function hideLightBox() {
		for (i = 0; i < lightBox.length; i++) {
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
	
    photos.forEach(photo => photo.addEventListener("click", showLightBox));
	exitButtons.forEach(exitButton => exitButton.addEventListener("click", hideLightBox));

	play.addEventListener("click", playPressed);
	pause.addEventListener("click", pausePressed);
	stop.addEventListener("click", stopPressed);
	rewind.addEventListener("click", rewindPressed);
	fastforward.addEventListener("click", fastForwardPressed);
	volumeUp.addEventListener("click", volumeUpPressed);
	volumeDown.addEventListener("click", volumeDownPressed);
	
})();