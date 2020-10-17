const cartEl = document.querySelector('.cart');
const gameBoard = document.querySelector('.game-board');
const count = 10;
const cart = [];

// массив со случайным набором чисел
const arrCart = [];
const quantityCart = 30;
for (let i = 0; i < quantityCart; i++) {
    arrCart.push(Math.round(Math.random() * quantityCart))
}
console.log(arrCart)

// переменные с типом карт
const CartOne = `<div class='corner'>
                    <img src="./image/corner.png" alt="">
                </div>`;
const CartTwo = `<div class='impasse'>
                    <img src="./image/impasse.png" alt="">
                </div>`;
const CartThree = `<div class='stick'>
                        <img src="./image/stick.png" alt="">
                </div>`;

// Сгенерировать 30 карт 
const generateCart = (cartArr) => {
    for(let i = 1; i <= count; i++) {
        cartEl.innerHTML
    };
    return cartArr;
};
generateCart(cart);
console.log(generateCart(cart))

// Отрисовка игрового поля
let fieldsNumb = 8;
const arr = [];
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