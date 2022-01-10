self.onmessage = function(e) {
	for(var i=1; i<100000000; i++) {
		if(i%5000000==0) {
			postMessage(i);
		}
	}
}