var start = new Date().getTime();
		function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
		}


		function makeShapeApper() {
			var ram = Math.random() * 400;
		
			document.getElementById("shape").style.top = ram + "px";
			document.getElementById("shape").style.budd = ram + "px";
			document.getElementById("shape").style.left = ram + "px";
			document.getElementById("shape").style.background =  getRandomColor();
			document.getElementById("shape").style.width = ram + "px";
			document.getElementById("shape").style.height = ram + "px";
			document.getElementById("shape").style.display = "block";
			
			if (Math.random() > 0.5){
				document.getElementById("shape").style.borderRadius = "50%";

			}else {
				document.getElementById("shape").style.borderRadius = "10%";

			}
			start = new Date().getTime();

		}
		

		function apperAgain() {
			setTimeout(makeShapeApper, Math.random() * 2000);

		}

		apperAgain();

		

		document.getElementById("shape").onclick =function() {
		
			document.getElementById("shape").style.display = "none";

			var end = new Date().getTime();
			var timetake = (end - start) / 1000 + "s";
			document.getElementById("timer").innerHTML = timetake; 
			apperAgain();
		}
	
		