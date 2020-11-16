// function User(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.fio = () => {
//         console.log(`${name} ${surname}`)
//     };
//     this.next = cb;
// };

const { filter } = require("./models/db");

// const user0 = new User('Ivan', 'Blizanda', () => {
//     return 'hello next';
// });
// //const user1 = new User('Okan', 'Blizangfdda');

// console.log(user0);
// user0.fio();
// console.log(user0.next())

// const arr = [4, 5, 6, 78, 8, 3, -1];

// const arr2 = arr.map(elm => elm * 2);
// const arr3 = arr2.filter(elm => elm > 10);
// const arr4 = arr3.filter(elem => elem < 100);

// const arr5 = arr.map(elm => elm * 2).filter(elm => elm > 10).filter(elem => elem < 100)

// console.log(arr5);

// setTimeout(() => {
//     console.log('hello1');
//     setTimeout(() => {
//         console.log('hello2');
//     }, 3000);
// }, 2000);

const axios = require('axios');

const sTime1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hello1');
        resolve();
    }, 2000);
}).then(() => {
   axios.get('https://www.google.com/')
   .then((responce3) => console.log(responce3))
   .then(() => {
        console.log('hello3');
    })
    .catch((err) => console.log('err axios:', err))
}).catch(() => {
    console.log('error! in sTime1')
});




// setTimeout(() => {
//     console.log(sTime, sTime2);
// }, 4000);

// console.log(sTime, sTime2)