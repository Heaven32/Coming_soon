const box = document.querySelectorAll('.box');
const strStatus = document.createElement('div');
const body = document.querySelector('body');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const topBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
let arr = [];
let direction = ""; // Направление

// 1) Сгенерируй 2м массив, константа сторона поля, например, равна 5.
let someNumb = 5;
const doubleMas = (item) => {
    for (let i = 0; i < item; i++) {
        arr[i] = [];
        for (let j = 0; j < item; j++) {
            arr[i][j] = null;
        }
    }
}
doubleMas(someNumb);

// 2) напиши функцию очистки массива, заполнить null
// const clearMas = arr.map(item => {
//         return item.map(() => {
//             return null
//         });
//     });

// console.log(clearMas)


// Первоначальное положение курсора в левом верхнем углу
const currentPosition = [0,0];
arr[currentPosition[0]][currentPosition[1]] = 1;

// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве
const countingEl = () => { 
    let temp = 0;
    arr.forEach(item => {   
        return item.forEach(i => {
            if(i !== null){
                temp += 1;
                return  temp;
            }
        })
    });
    // строка статуса, в которой будет написано количество ненулевых клеток.
    strStatus.classList.add('status');
    body.prepend(strStatus);
    strStatus.innerHTML = `Количество ненулевых клеток ${temp}`;
}
countingEl(countingEl);

// 4) отобрази на странице игровое поле(клетки массива)
const mainBlock = document.querySelector('.main');
const createBlock = () => {
    mainBlock.innerHTML = ' ';
    arr.forEach(i => {
        i.forEach(x => {
            if(x === 1){
                mainBlock.innerHTML += `<div class='box-1'/>`  
            }else if (x === 2){
                mainBlock.innerHTML += `<div class='box-2'/>`
            }else {
                mainBlock.innerHTML += `<div class='box-0'/>`
            }
        });           
    });
}
createBlock();

// Функция перемещения ячейки
const moveCell = (x, y) => {
    doubleMas();
    arr[currentPosition[0]][currentPosition[1]] = 2;
    arr[currentPosition[0] + x][currentPosition[1] + y] = 1;
    currentPosition[0] = x;
    currentPosition[1] = y;
    createBlock();
    countingEl();
}

// Движение влево
const moveLeft = () => {
    moveCell(0, -1);
}
// Движение вправо
const moveRight = () => {
    moveCell(0, 1);
}
// Движение вверх
const moveTop = () => {
    moveCell(-1, 0);
}
// Движение вниз
const moveDown = () => {
    moveCell(1, 0);
}

// 6) сделай управление мышкой и клавиатурой, там где находится курсор
 
// Фунуция обработки нажатия клавиатуры
const handleKeyboard = () => {
    // Если нажата стрелочка права
    if (event.code == 'ArrowRight' && direction !== "left") {
        direction = "right"; // Поменяет направление на право
        moveRight();
    }
    // Если нажата стрелочка вниз
    if (event.code == "ArrowDown" && direction !== "top") {
        direction = "down"; // Поменяет направление вниз
        moveDown();
    }
    // Если нажата стрелочка налево
    if (event.code == "ArrowLeft" && direction !== "right") {
        direction = "left"; // Поменяет направление налево
        moveLeft();
    }
    // Если нажата стрелочка верх
    if (event.code == "ArrowUp" && direction !== "down") {
        direction = "top"; // Поменяет направление верх
        moveTop();
    }
}

// Функция обработотки клика мышки
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
topBtn.addEventListener('click', moveTop);
downBtn.addEventListener('click', moveDown);
document.addEventListener("keydown", handleKeyboard);




