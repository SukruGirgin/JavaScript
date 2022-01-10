// Zugriff auf die Anwendung-Konsole und Definition einer Meldung
console.log('HuHu');

/*
 Nach Eintritt des Events, ausführen einer anonyme Funktion
 document.addEventListener('DOMContentLoaded', function() {})
 Veraltete Methode: window.onload() ==> Unterschied zu DOMContentLoaded: Das Ereignis tritt erst nach laden sämtlicher Inhalte ein
*/

// Nach Eintritt des Events, ausführen einer Call-Back Funktion
document.addEventListener('DOMContentLoaded', cssZuweisung);

// Auflistung aller zu bearbeitenden Arbeitsschritt
function cssZuweisung(e) {
  // Zur Erinnerung, das e steht für das Event ==> hier DOMContent.DOMContent.DOMContentLoaded
  console.log('Funktion läuft');
  // erster Zugriff auf Element IMMER var oder let
  let h1 = document.querySelector('div h1');
  // Ändern EINER CSS-Eigenschaft
  h1.style.color = 'red';
  h1.style.backgroundColor = 'rgba(0,0,255,0.5)';
  /*
   * Wenn mit der Maus über das Bild im p gefahren wird,
   * soll die Klasse child dem img zugewiesen werden.
   * Schritt 1: Zugriff auf das img im p
   */
  let image = document.querySelector('p > img');
  //Veraltete Syntax: image.onMouseOver()
  image.addEventListener('mouseover', function(){
    //img-Tag um Attribut class mit dem Wert child erweitern
    image.setAttribute('class', 'child');
  });
  /*
   Wenn die Maus das Bild wieder verlässt, soll das Attribut class
   wieder entfernt werden
  */
 image.addEventListener('mouseout', function() {
    image.removeAttribute('class');
 });

  //Zugriff auf alle Bilder im Dokument
  let allImg = document.querySelectorAll('img');
  // Zugriff auf erstes Element im Stapel
  allImg[0].addEventListener('mouseover', function() {
    allImg[0].setAttribute('class', 'allImg');
  });
  // Zugriff auf zweites Element im Stapel
  // allImg[1].addEventListener('mouseover', function() {
  //   allImg[1].setAttribute('class', 'allImg');
  // });
  // Zugriff auf drittes Element im Stapel
  allImg[2].addEventListener('mouseover', function() {
    allImg[2].setAttribute('class', 'allImg');
  });

  /*
  Dynamischer Aufruf jedes einzelnen Elements durch wiederholtes
  ansprechen bei verändertem Zählwert
  in Schleifenkopf:
  1. Wert Zählvariable, 2. Wert Vergleich
  3. Wert Veränderung nach Durchlauf / Abarbeitung
  */
  for(let i = 0; i < allImg.length ; i++) {
    allImg[i].addEventListener('mouseout', function() {
      allImg[i].removeAttribute('class');
    });
  }
}