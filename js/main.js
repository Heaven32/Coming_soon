const cartEl = document.querySelector('.cart');
const gameBoard = document.querySelector('.game-board');
const mainBlock = document.querySelector('.main');
const count = 10;
let arr = [];

// Сгенерировал 30 карт 
const generateCart = (cartArr) => {
    for(let i = 1; i <= count; i++) {
        cartEl.innerHTML += `<div class='corner'>
                                    <img src="./image/corner.png" alt="">
                                </div>
                                <div class='impasse'>
                                <img src="./image/impasse.png" alt="">
                                </div>
                                <div class='stick'>
                                    <img src="./image/stick.png" alt="">
                            </div>`  
    };
    return cartArr;
};
generateCart();


// Отрисовка игрового поля
let fieldsNumb = 8;
const doubleMas = (item) => {
    for (let i = 0; i < fieldsNumb; i++) {
        arr[i] = [];
        for (let j = 0; j < fieldsNumb; j++) {
            arr[i][j] = null;
        }
    }
}
doubleMas();

const createBlock = () => {
    arr.forEach(i => {
        i.forEach(x => {
            gameBoard.innerHTML += `<div class='box'/>`  
            });       
    });
};
createBlock();
