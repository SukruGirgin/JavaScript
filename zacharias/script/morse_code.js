//window.onload = init;

document.addEventListener("DOMContentLoaded", init);

function init() {
	document.getElementById("eingabe").addEventListener("keyup",go);
	// removeEventListener()
}

function go(evt) {
	var eingabe = document.getElementById("eingabe").value.toLowerCase();
	
	// <br> entfernen
	// eingabe.replace("<br>","");
	
	const ausgabe = document.getElementById("ausgabe");
	console.log(eingabe);
	
	ausgabe.innerHTML = "";
	var ausg = "";
	for(var i=0; i < eingabe.length; i++) {
		//ausgabe.innerHTML += codeArray[eingabe[i]];
		ausg += codeArray[eingabe[i]];
	}
	ausgabe.innerHTML = ausg;
	//console.log(codeArray.length);
}