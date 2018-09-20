
var handshook = false;
var fileIn = document.getElementById("rulefile");
var rulesPort;
setTimeout(onStartUp, 2000);
function onStartUp() {
	rulesPort = browser.runtime.connect({name:"rulesPort"});
	setTimeout(later, 2000);
	if(rulesPort){
		rulesPort.onMessage.addListener(function(msg) {
			  if(msg.handShake=="shake"){
				  handshook = true;
			  }
		});
		fileIn.onchange = function(event) {
			var input = event.target;
			var rulefile = "";
			inReader = new FileReader();
			inReader.readAsText(input.files[0]);
			inReader.onload = function() {
				rulefile = inReader.result;
				if(handshook){
					rulesPort.postMessage({rules:rulefile});
				}
			};


		}

	}
}
function later() {
	rulesPort.postMessage({handShake: "shake"});
}





