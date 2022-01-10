self.onmessage = function(e) {
	var input = e.data;
	for(var i=1; i<input; i++) {
		if(i%2500==0) {
			postMessage(i);
		}
	}
}