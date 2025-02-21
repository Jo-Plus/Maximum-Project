let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.getElementById('nouvil');
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  nouvil.style.fontSize = value + 'px';
  if (value >= 67) {
    nouvil.style.fontSize = 67 + 'px';
    nouvil.style.position = 'fixed';
    if (value >= 437) {
      nouvil.style.display = 'none';
    } else {
      nouvil.style.display = 'block';
    }
    if(value >= 127){
      document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)';
    }else{
      document.querySelector('.main').style.background = 'linear-gradient( #200016 , #10001f)';
    }
  }
}
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let value = this.getAttribute('data-num');
    if (value) {
      let lastChar = screen.value.slice(-1);
      if (isNaN(lastChar) && isNaN(value) && lastChar != "") {
        return;
      }
      screen.value += value;
    }
  });
});
equal.addEventListener('click', function () {
    if (screen.value === '' || isNaN(eval(screen.value))) {
      screen.value = 'Error';
    } else {
      screen.value = eval(screen.value).toFixed(3);
    }
});

clear.addEventListener('click', function () {
  screen.value = '';
})