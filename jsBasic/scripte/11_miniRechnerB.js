/*
document.addEventListener('DOMContentLoaded, function(){})
hier NICHT erforderlich, da script als letzter Teil der HTML-Seite geladen wird
*/

/*
Zusammenfassen der Arbeitsschritte, welche nach Betätigung des Buttons abgearbeitet werden sollen
*/
function formCheck() {
  //zuerst Zugriff auf Eingabefelder
  let no1 = document.querySelector('#no1');
  let no2 = document.querySelector('#no2');
  let res = document.querySelector('#res');
  let rest = document.querySelector('#rest');
  let out = document.querySelector('#out');

  //Zugriff auf die Werte der beiden zulässigen Eingabefelder
  let no1Value = no1.value;
  let no2Value = no2.value;

  if(no1Value === "" || no2Value === "") {
    out.style.color = 'red';
    out.innerHTML = 'Bitte geben Sie etwas ein!';
    no1.focus();
  }

  //Falls Komma bei Eingabe verwendet, ersetze diese durch Punkt
  no1Value = no1Value.replace(',', '.');
  no2Value = no2Value.replace(',', '.');

  /*
  Umwandlung String in Number, bei Fehler liefert die Funktion 
  NaN (Not a Number) als Rückgabewert
  */
  no1Value = Number(no1Value);
  no2Value = Number(no2Value);

  //Prüfe ob der Rückgabewert NaN oder keine Eingabe
  if(isNaN(no1Value) || isNaN(no2Value)) {
    out.style.color = 'red';
    out.innerHTML = 'Bitte geben Sie zwei Zahlen ein!';
    no1.focus();
  } else {
    let result = no1Value + no2Value; //Addition
    //let result = no1Value - no2Value; //Subtraktion
    //let result = no1Value * no2Value; //Multiplikation
    //let result = no1Value / no2Value; //Division
    result = String(result); //Umkehrung aus Z 29, 30
    result = result.replace('.', ',');
    res.value = result;
  }
}

//Wenn der Button geklickt wird (click), soll die Funktion (formCheck) abgearbeitet werden
document.querySelector('button').addEventListener('click', formCheck);