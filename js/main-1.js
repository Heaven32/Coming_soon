const strStatus = document.createElement('div');
const body = document.querySelector('body');
let mas = [];

// функцию очистки массива
const clearMas = mas.map((num) => {
    num = null;
    return num
});

// функцию подсчета ненулевых(непустых) клеток во всём массиве
const findMas = mas.reduce((item,i) => {
   if(i !== ' ') {
       item += 1
   }
   return item
},0);

// строка статуса, в которой будет написано количество ненулевых клеток
strStatus.classList.add('status');
body.prepend(strStatus);
strStatus.innerHTML = `Количество ненулевых клеток ${findMas}`;

// отображение на странице игрового поля(клетки массива)
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