

function highlight(){ 
	var aVideo = document.getElementById('theVideo');
	var captions = document.getElementsByTagName('span');
	aVideo.addEventListener('timeupdate', (e) => {
		let currentTime = aVideo.currentTime;
		for (var i = 0; i < captions.length; i++) {
			let startTime = captions[i].getAttribute('data-start');
			let endTime = captions[i].getAttribute('data-end');
			if (startTime <= currentTime && endTime > currentTime) {
				captions[i].className ='highlightText';
			} else {
				captions[i].className = '';
			}
		}
	});

	var videoTranscript = document.querySelector('.transcript')
	videoTranscript.addEventListener('click', (e) => {
		let target = e.target;
		let advanceTime = target.getAttribute('data-start');
		if (target) {
			aVideo.currentTime = advanceTime;
		}
	});
};

window.addEventListener("load", highlight, false);


