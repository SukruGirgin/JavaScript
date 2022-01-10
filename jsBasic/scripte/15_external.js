document.addEventListener('DOMContentLoaded', init);

function init(e) {
  let meld = document.querySelector('#meldung');
  meld.addEventListener('click', meldung);
}

function meldung() {
  confirm('Ein Meldungsfenster\r\nmit zwei Zeilen Text.');
}