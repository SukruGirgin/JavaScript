// Javascript Vorgehen
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('JS DOM geladen');
// });

//Hier Aufruf einer anonymen Funktion
$(document).ready(function() {
  console.log('JQ DOM geladen');
  //Javascript Vorgehen
  //let info = document.querySelector('#info');
  //let btn = document.querySelector('button');
  //btn.addEventListener('click', function() {})
  $('#info').submit(function(e) {
    e.preventDefault(); //Stoppe den Versand des Formulars

    //Jascript Vorgehen
    //let firstname = document.querySelector('#firstname');
    //if(firstname.value === "") {}

    if($('#firstname').val() === "") {
      //alert eine JS-Methode zur Erzeugung eines modalen Fensters
      alert('Bitte tragen Sie Ihren Vornamen ein.');
      $('#firstname').focus();
    } else if($('#lastname').val() === "") {
      $('#out').html('Bitte Nachnamen eintragen.');
      $('#lastname').focus();
    } else if(!$('#benzin').is(':checked') && !$('#diesel').is(':checked') && !$('#elektro').is(':checked')) {
      $('#out').html('Bitte wählen Sie eine Information.');
    } else {
      //Daten versenden und Dankeseite aufrufen
      e.currentTarget.submit();
    }
  });
});
