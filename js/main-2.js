let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');
let box = document.querySelector('.box');
let contrl = document.querySelector('input[type=checkbox]');
let paravozik = document.getElementById('paravozik');
let temp = 0;

contrl.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
      box.classList.toggle('light');
    };
  });
btnLeft.addEventListener('click', () => {
    temp = temp - 10;
    paravozik.style.left = temp + 'px';
});

btnRight.addEventListener('click', () => {
    temp = temp + 10;
    paravozik.style.left = temp + 'px';
});

document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowLeft') {
        temp = temp - 10;
        paravozik.style.left = temp + 'px';
    } else if(event.code === 'ArrowRight') {
        temp = temp + 10;
        paravozik.style.left = temp + 'px';
    };
});