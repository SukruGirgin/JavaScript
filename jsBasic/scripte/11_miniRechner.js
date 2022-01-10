// Hier kommt die Logik für den Rechner
document.addEventListener('DOMContentLoaded', function(e){
  'use strict';
  console.log('DOM geladen');
  let btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    let no1 = document.querySelector('#no1');
    let no2 = document.querySelector('#no2');
    let res = document.querySelector('#res');
    let rest = document.querySelector('#rest');
    let out = document.querySelector('#out');

    //Umwandlung der Werte, die Standardmäßig dem Datentyp string(-Objekt) entsprechen in number-Objekt
    console.log('Typ 1: ' + typeof(no1.value));
    console.log('Typ 2: ' + typeof(no2.value));
    // Falls in dem übergebenen Wert ein Komma vorkommt,
    // dieses für die korrekte Berechnung in einen Punkt wandeln
    // replace() eine methode des String-Objekts, daher Ersetzung
    // vor Umwandlung
    let no1V = no1.value;
    let no2V = no2.value
    no1V = no1V.replace(',','.');
    no2V = no2V.replace(',','.');
    console.log('Z1: ' + no1V);
    console.log('Z2: ' + no2V);
    //parseInt ==> wandele den Inhalt in einen Integer (Ganzzahl)
    //parseFloat ==> wandele den Inhalt in eine Gleitkommazahl
    //Number ==> wandle den Inhalt in eine Zahl
    //alle 3 Varianten ändern den Datentyp, auch wenn Inhalt KEINE Zahl

    no1V = Number(no1V); 
    no2V = Number(no2V);
    console.log('Neu 1: ' + typeof(no1V));
    console.log('Neu 2: ' + typeof(no2V));

    // Prüfe ob etwas NICHT zutrifft
    // a) if(!no1.value === ) ODER
    // b) if (no1.value !==)
    
    //Prüfe ob der Wert tatsächlich einer Zahl entspricht
    //Wenn der Wert Keine Zahl (isNaN() ==> is Not a Number) liefere Fehler
    if(isNaN(no1V) || isNaN(no2V)) {
      console.log('Fehler');
      out.innerHTML = 'Nur Zahlen erlaubt';
      no1.focus();
    } else {
      console.log('Rechne');
      let result = no1V + no2V; //addiere
      res.value = result;
    }
  });
});
