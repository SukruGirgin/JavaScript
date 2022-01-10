self.onmessage = function(e) {
	for(var i=1; i<1000000000; i++) {
		if(i%10000000==0) {
			postMessage(i);
		}
	}
}