// Überwache das HTML-Dokument und wenn DOM geladen, führe Funktion init aus
document.addEventListener('DOMContentLoaded', init);
function init(e) {
  'use strict';
  // const wenn keine Änderung des Inhaltes des Speicherplatzes vorgesehen ist
  const out = document.querySelector('#output');
  //Variablen Deklaration ohne Schlüsselwort
  //firstname = 'Meiner';
  //im Strict-Modus nicht mehr erlaubt
  var firstname = 'Meiner';
  //Variablen Deklaration mit Schlüsselwort var
  var lastname = 'Deiner';
  //Variablen Deklaration mit Schlüsselwort let
  let address = 'Hier';
  const mwst = 0.19;

  //Sammlung von Aktionen, die ausgeführt werden sollen
  function tuwas() {
    //globaler Variablenwert wird neu gesetzt (befüllt)
    firstname = 'Horst';
    out.innerHTML = 'Vorname: ' + firstname + ', Nachname: ' + lastname + ', Adresse: ' + address;
    address = 'Dort';
    out.innerHTML += '<br>Adresse nach Änderung: ' + address;
    let email = 'meine@example.com';
    out.innerHTML += '<br>E-Mail: ' + email;
    out.innerHTML += '<br>MwSt: ' + mwst;
    mwst = 0.07;
    out.innerHTML += '<br>MwSt: ' + mwst;
  }
  //Starte die definierte Funktion
  tuwas();
  //Was passiert, wenn in der Funktion tuwas, ein Variablenwert neu gesetzt wird?
  //außerhalb der Funktion?
  out.innerHTML += '<br>Nach Funktion: ' + firstname;
  out.innerHTML += '<br>Adresse: ' + address;
  out.innerHTML += '<br>E-Mail: ' + email;

  /* mehrzeiliger Kommentar:
   document.write bewirkt an dieser Stelle, dass das komplette Dokument
   neu beschrieben wird und somit das HTML verloren geht
   document.write('<p>Nach der Funktion: ' + firstname);
  */
}
