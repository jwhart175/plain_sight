var handshook = false;
var pagePort;
setTimeout(onStartUp, 2000);
function onStartUp() {
	pagePort = browser.runtime.connect({name:"pagePort"});
	if(pagePort){
		pagePort.onMessage.addListener(function(msg) {
			  console.log(msg);
			  if(msg.handShake=="shake"){
				  handshook = true;
			  }
			  if(msg.getpage=="getPage"){
				  pagePort.postMessage({input:document.documentElement.innerHTML});
			  }
			  if(msg.out){
				  if(typeof msg.out==typeof "dog"){
					  document.documentElement.innerHTML = msg.out;
				  }
			  }
		});

		setTimeout(later, 2000);
	}
}
function later() {
	pagePort.postMessage({handShake: "shake"});
}





