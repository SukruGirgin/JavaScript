document.addEventListener('DOMContentLoaded', init);

function init(e) {
  let p = document.querySelectorAll('p');
  let btn = document.querySelectorAll('button');

  btn[0].addEventListener('click', function() {
      p[2].style.color = '#00f';
  });

  btn[1].addEventListener('mouseover', function() {
    p[0].style.backgroundColor = 'rgba(51,255,255,0.5)';
  });

  btn[1].addEventListener('mouseout', function() {
    p[0].style.backgroundColor = 'initial';
  });

  btn[2].addEventListener('mousedown', function() {
    p[1].style.border = '1px solid #0c0';
    p[1].style.boxShadow = '2px 2px 2px #333';
  });

  btn[2].addEventListener('mouseup', function() {
    p[1].style.border = 'initial';
    p[1].style.boxShadow = 'none';
  });
}