let mas = [];

// функцию очистки массива
const clearMas = mas.map((num) => {
    return num = null;
})
console.log(clearMas)

// функцию подсчета ненулевых(непустых) клеток во всём массиве
const mas1 = [1, 45, 35, 22, 1, 1]
const findMas = mas1.filter((item) => {
    if(item === ''){
        return item
    }
})
console.log(findMas.length)

const strStatus = document.createElement('div');
const body = document.querySelector('body');
strStatus.classList.add('status');
body.prepend(strStatus);

// строку статуса, в которой будет написано количество ненулевых клеток
strStatus.innerHTML = `Количество ненулевых клеток ${findMas.length}`;

// отобрази на странице игровое поле(клетки массива)
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