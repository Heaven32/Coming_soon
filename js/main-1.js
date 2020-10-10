const strStatus = document.createElement('div');
const body = document.querySelector('body');
let mas = [];

// 1) Сгенерируй 2м массив, константа сторона поля, например, равна 5.
const doubleMas = () => {
    for (let i = 0; i < 5; i++) {
        mas[i] = [];
        for (let j = 0; j < 5; j++) {
            mas[i][j] = 0;
        }
    }
}


// 2) напиши функцию очистки массива, заполнить null
const clearMas = mas.map((num) => {
    num = null;
    return num
});

// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве
const findMas = mas.reduce((item,i) => {
   if(i !== ' ') {
       item += 1
   }
   return item
},0);

// строка статуса, в которой будет написано количество ненулевых клеток.
strStatus.classList.add('status');
body.prepend(strStatus);
strStatus.innerHTML = `Количество ненулевых клеток ${findMas}`;

// 4) отобрази на странице игровое поле(клетки массива)
const createBlock = () => {
    let mainBlock = document.querySelector('.main');
    let block;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            block = document.createElement('div');
            mainBlock.appendChild(block);
            block.classList.add('box');
        }
    }
}
createBlock();

// 6) сделай управление мышкой и клавиатурой, там где находится курсор
const box = document.querySelectorAll('.box');

const findCoursor = box.forEach((i) => {
    i.addEventListener('mouseover', (event) => {
        event.target.classList.add('color');
        event.relatedTarget.classList.remove('color');
    }); 
});


