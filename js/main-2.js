let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');
let box = document.querySelector('.box');
let contrl = document.querySelector('input[type=checkbox]');
let paravozik = document.getElementById('paravozik');
let temp = 0;
let timerId = '';

contrl.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
      box.classList.toggle('light');
    };
  });
btnLeft.addEventListener('mousedown', () => {
    timerId = setInterval(() => {
        temp = temp - 0.8;
        paravozik.style.left = temp + 'px';
    });
});

btnLeft.addEventListener('mouseup', () => {
    clearInterval(timerId)
});
    
btnRight.addEventListener('mousedown', () => {
    timerId = setInterval(() => {
        temp = temp + 0.8;
        paravozik.style.left = temp + 'px';
    });
});

btnRight.addEventListener('mouseup', () => {
    clearInterval(timerId)
});

document.addEventListener('keydown', (event) => {
    if(event.code === 'KeyF') {
        box.classList.toggle('light');
    };
    if(event.code === 'ArrowLeft') {
        temp = temp - 5;
        paravozik.style.left = temp + 'px';
    }else if(event.code === 'ArrowRight') {
        temp = temp + 5;
        paravozik.style.left = temp + 'px';
    };
});

