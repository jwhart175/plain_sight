var handshook = false;
var chooser = document.getElementById("rulefile");
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
		chooser.onchange = function(event) {
			var input = event.target;
			var rulefile = "";
			inReader = new FileReader();
			inReader.readAsText(input.files[0]);
			inReader.onload = function() {
				rulefile = inReader.result;
				if(handshook){
					rulesPort.postMessage({rules:rulefile});
					alert(rulefile);
				}
			};
		}

	}
}
function later() {
	rulesPort.postMessage({handShake: "shake"});
}





