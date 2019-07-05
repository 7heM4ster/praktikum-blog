(() => {
	// Crash
	const crashAudio = document.getElementById("Crash-Audio"); 
	const crash = document.getElementById("Crash");
	const crashCymbol = document.getElementById("Crash-Cymbol");

	const crashAnimation = new TimelineMax({ paused: true })
		.to(crashCymbol, .1, { rotation: -9, transformOrigin: "50% 50%" })
		.to(crashCymbol, 1.5, {
			rotation: 0,
			transformOrigin: "50% 50%",
			ease: Elastic.easeOut.config(2.5, 0.3)
		});

	let crashAnimDone = false;
	function playCrash() {
		crashAudio.currentTime = 0;

		if (!crashAnimDone) {
			crashAnimDone = true;
			setTimeout(() => {
				crashAnimDone = false;
			}, 100);

			crashAnimation.restart();
			crashAnimation.play();
			crashAudio.play();
		}
	}

	

	// Tom Left
	const tomLeftAudio = document.getElementById("Big-Rack-Tom-Audio"); 
	const tomLeft = document.getElementById("Tom-Left-All");
	const tomLeftDrum = document.getElementById("Tom-Left-Drum");

	const tomLeftAnimation = new TimelineMax({ paused: true })
		.to(tomLeftDrum, 0.1, {
			scaleX: 1.04,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		})
		.to(tomLeftDrum, 0.1, {
				scaleY: 0.95,
				transformOrigin: "50% 50%",
				ease: Expo.easeOut
			},
			"0"
		)
		.to(tomLeft, 0.1, {
				rotation: -2.5,
				transformOrigin: "100% 50%",
				ease: Elastic.easeOut
			},
			"0"
		)
		.to(tomLeftDrum, 0.4, {
			scale: 1,
			transformOrigin: "50% 50%",
			ease: Elastic.easeOut
		})
		.to(tomLeft,0.6, {
				rotation: 0,
				transformOrigin: "100% 50%",
				ease: Elastic.easeOut
			},
			"-=0.4"
		);

	let tomLeftAnimDone = false;
	function playTomLeft() {
		tomLeftAudio.currentTime = 0;

		if (!tomLeftAnimDone) {
			tomLeftAnimDone = true;
			setTimeout(() => {
				tomLeftAnimDone = false;
			}, 100);

			tomLeftAnimation.restart();
			tomLeftAnimation.play();
			tomLeftAudio.play();
		}
	}

	// Right Tom
	const rightTomAudio = document.getElementById("Small-Rack-Tom-Audio"); 
	const rightTom = document.getElementById("Tom-Right-All");
	const rightTomDrum = document.getElementById("Tom-Right-Drum");

	const rightTomAnimation = new TimelineMax({ paused: true })
		.to(rightTomDrum, 0.1, {
			scaleX: 1.04,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		})
		.to(rightTomDrum, 0.1, {
				scaleY: 0.95,
				transformOrigin: "50% 50%",
				ease: Expo.easeOut
			},
			"0"
		)
		.to(rightTom, 0.1, {
				rotation: 2.5,
				transformOrigin: "0 50%",
				ease: Elastic.easeOut
			},
			"0"
		)
		.to(rightTomDrum, 0.4, {
			scale: 1,
			transformOrigin: "50% 50%",
			ease: Elastic.easeOut
		})
		.to(rightTom,0.6, {
				rotation: 0,
				transformOrigin: "0 50%",
				ease: Elastic.easeOut
			},
			"-=0.4"
		);

	let rightTomAnimDone = false;
	function playTomRight() {
		rightTomAudio.currentTime = 0;

		if (!rightTomAnimDone) {
			rightTomAnimDone = true;
			setTimeout(() => {
				rightTomAnimDone = false;
			}, 100);

			rightTomAnimation.restart();
			rightTomAnimation.play();
			rightTomAudio.play();
		}
	}

	// Floor Tom
	const floorTomAudio = document.getElementById("Floor-Tom-Audio"); 
	const floorTom = document.getElementById("Floor-Tom");

	const floorTomAnimation = new TimelineMax({ paused: true })
		.to(floorTom, 0.1, {
			scaleX: 1.02,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		})
		.to(floorTom, 0.1, {
				scaleY: 0.95,
				transformOrigin: "50% 100%",
				ease: Expo.easeOut
			},
			"0"
		)
		.to(floorTom, 0.4, {
			scale: 1,
			transformOrigin: "50% 100%",
			ease: Elastic.easeOut
		});

	let floorTomAnimDone = false;
	function playTomFloor() {
		floorTomAudio.currentTime = 0;

		if (!floorTomAnimDone) {
			floorTomAnimDone = true;
			setTimeout(() => {
				floorTomAnimDone = false;
			}, 100);

			floorTomAnimation.restart();
			floorTomAnimation.play();
			floorTomAudio.play();
		}
	}


	// Hi Hat Closed
	const hiHatAudio = document.getElementById("Hi-Hat-Closed-Audio"); 
	const hiHat = document.getElementById("Hi-Hat");
	const hiHatTop = document.getElementById("Hi-Hat-Top");
	const hiHatBottom = document.getElementById("Hi-Hat-Bottom");
	
	const hiHatAnimation = new TimelineMax({ paused: true })
		.to([hiHatTop, hiHatBottom], 0.1, {
			rotation: -4,
			transformOrigin: "50% 50%"
		})
		.to([hiHatTop, hiHatBottom], 0.6, {
			rotation: 0,
			transformOrigin: "50% 50%",
			ease: Elastic.easeOut.config(1.5, 0.2)
		});
	hiHat.addEventListener("click", function () {
		hiHatAudio.play();
	} );

	let hiHatAnimDone = false;
	function playHiHat() {
		hiHatAudio.currentTime = 0;

		if (!hiHatAnimDone) {
			hiHatAnimDone = true;
			setTimeout(() => {
				hiHatAnimDone = false;
			}, 100);

			hiHatAnimation.restart();
			hiHatAnimation.play();
			hiHatAudio.play();
		};
	}


	// Kick
	const kickAudio = document.getElementById("Kick-Audio"); 
	const kick = document.getElementById("Kick-Drum");
	const kickAnimation = new TimelineMax({ paused: true })
		.to(kick, 0.1, {
			scale: 1.02,
			transformOrigin: "50% 100%",
			ease: Expo.easeOut
		})
		.to(kick, 0.4, {
			scale: 1,
			transformOrigin: "50% 100%",
			ease: Elastic.easeOut
		});

	let kickAnimDone = false;
	function playKick() {
		kickAudio.currentTime = 0;

		if (!kickAnimDone) {
			kickAnimDone = true;
			setTimeout(() => {
				kickAnimDone = false;
			}, 100);

			kickAnimation.restart();
			kickAnimation.play();
			kickAudio.play();
		};
	}


	// Snare
	const snareAudio = document.getElementById("Snare-Audio"); 
	const snare = document.getElementById("Snare");
	const snareDrum = document.getElementById("Snare-Drum");

	const snareAnimation = new TimelineMax({ paused: true })
		.to(snareDrum, 0.1, {
			scaleX: 1.04,
			transformOrigin: "50% 50%",
			ease: Expo.easeOut
		})
		.to(snareDrum, 0.1,
			{
				scaleY: 0.9,
				transformOrigin: "50% 100%",
				ease: Expo.easeOut
			},
			"0"
		)
		.to(snareDrum, 0.4, {
			scale: 1,
			transformOrigin: "50% 100%",
			ease: Elastic.easeOut
		});
		
	let snareAnimDone = false;
	function playSnare() {
		snareAudio.currentTime = 0;

		if (!snareAnimDone) {
			snareAnimDone = true;
			setTimeout(() => {
				snareAnimDone = false;
			}, 100);

			snareAnimation.restart();
			snareAnimation.play();
			snareAudio.play();
		}
	}
		

	crash.addEventListener("click", function () {
		playCrash();
		playKick();
	});

	tomLeft.addEventListener("click", function () {
		playTomLeft();
	});

	rightTom.addEventListener("click", function () {
		playTomRight();
	});

	floorTom.addEventListener("click", function () {
		playTomFloor();
	});

	hiHat.addEventListener("click", function () {
		playHiHat();
	});

	kick.addEventListener("click", function () {
		playKick();
	});

	snare.addEventListener("click", function () {
		playSnare();
	});


	window.addEventListener("keydown", checkKeyPressed, false);
	function checkKeyPressed(evt) {
		var keyInput = evt.keyCode
		switch (keyInput) {
			
			case 72: // H
				playSnare();
				break;
			case 74: // J
				playHiHat();
				break;
			case 66: // B
				playKick();
				break;
			case 71: // G
				playTomFloor();
				break;
			case 70: // F
				playCrash();
				playKick();
				break;
			case 84: // T
				playTomLeft();
				break;
			case 90: // Z
				playTomRight();
				break;
		}
	}
})()
