// // function User(name, surname) {
// //     this.name = name;
// //     this.surname = surname;
// //     this.fio = () => {
// //         console.log(`${name} ${surname}`)
// //     };
// //     this.next = cb;
// // };



// const axios = require('axios');

// const sTime1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('hello1');
//         resolve();
//     }, 2000);
// }).then(() => {
//    axios.get('https://www.google.com/')
//    .then((responce3) => console.log(responce3))
//    .then(() => {
//         console.log('hello3');
//     })
//     .catch((err) => console.log('err axios:', err))
// }).catch(() => {
//     console.log('error! in sTime1')
// });


// // lessons 17.11

// var express = require('express');
// var router = express.Router();
// const axios = require('axios');
// //const texts = require('../models/db');


// // const page = {
// //   text:'',
// //   pagination:'',
// // };

// // const func = (temp) => {
// //   page.pagination = '';
// //   texts.forEach((elem,index) => {
// //     const str1 = `<a href='${index+1}'>${index+1}</a>`;
// //     const str2= `<a href='${index+1}' class='none'>${index+1}</a>`;
// //     if(index == temp){
// //       page.pagination += (str2 - 1);
// //     } else {
// //       page.pagination += str1;
// //     }
// //     return page
// //   });
// // };

// // router.get('/', (req, res) => {
// //   page.text = texts[0];
// //   func(Number(req.params.id - 1));
// //   res.render('index', page);
// // });

// // router.get('/:id', (req, res) => {
// //   page.text = texts[Number(req.params.id) - 1];
// //   func(Number(req.params.id - 1));
// //   res.render('index', page);
// // });

// const dog = {
//   nav: '',
//   img: ''
// }

// const list = new Promise((res, rej) => {
//   axios('https://dog.ceo/api/breeds/list/all')
//   .then((res1) => {
//     let arr = Object.keys(res1.data.message);
//     return arr;
//   })
//   .then((res2) => {
//     let str = '<select class="sel_dog">';
//     res2.forEach(el => {
//       str = `${str}<option>${el}</option>` 
//     });
//     str = `${str}</select>`;
//     res(str);
//   })
//   .catch((err) => { console.log('axios err', err)});
// });

// router.get('/', (req, res, next) => {
//   Promise.resolve(list)
//   .then((str2) => {
//     dog.nav = str2;
//     res.render('index', dog);
//   })
// });

// router.get('/:breed', (req, res, next) => {
//   const imgP = new Promise ((res,rej) => {
//     axios.get(`https://dog.ceo/api/breed/${req.params.breed}/images/random`)
//     .then((res1) => {
//       res(`<img src='${res1.data.message}'>`);
//     })
//   });
//   Promise.all([list, imgP])
//   .then((val) => {
//     console.log(val);
//     dog.nav = val[0];
//     dog.img = val[1];
//   })
//   .then(() => {
//     res.render('index', dog)
//   })
// });

// const imgDog = [];
//   router.get('/:id', (req, res) => {
//     axios.get(`https://dog.ceo/api/breed/${req.params.id}/images/random`)
//     .then((responce) => {
//       const img = responce.data;
//       imgDog.breed = img.message
//       console.log(imgDog)
//       res.render('index', imgDog);
//     })
//     .catch(() => res.send('<img src="https://error4xx.com/wp-content/uploads/2020/01/xerror404.jpg.pagespeed.ic.nsGGGHAQAl.webp" style="width:100vw; height:100vh">'))
//   })



// module.exports = router;


// // 20.11.2020

// const person = {
//   name: '',
//   info: '',
//   id: '',
// };

// // const getLinks = (arr) => {
// //   let str = ''
// //   arr.forEach((el, index) => {
// //     str = `${str} <div><a href='${el}'>film-${index + 1}</a></div>`
// //   })
// //   return str;
// // }


// router.get('/', function(req, res) {
//   res.render('index', person);
// });

// router.get('/:id', function(req, res) {
//   person.id = req.params.id;
//   axios.get(`https://swapi.dev/api/people/${req.params.id}`)
//   .then((res1) => {
//     person.name = res1.data.name;
//     const moviesPromises = res1.data.films.map(el => { // array
//       return axios.get(el)
//     })
//     Promise.all(moviesPromises)
//     .then((res3) => {
//       const titlesArr = res3.map(el => el.data.title);
//       const datesArr = res3.map(el => el.data.release_date);

//       let str = '<table>'
//       titlesArr.forEach((el,index) => {
//         str = `${str} <tr>
//                 <td>${el}</td>
//                 <td>${datesArr[index]}</td>
//               </tr>`;
//       })
//       person.info = '/table';
//       res.render('index', person);
//     }); 
//   }).catch(err => {
//     console.log(err.response.data)
//     person.info = err.response.data.detail;
//   });
// });


const users = [
  {
    id: 'as23',
    nick: 'Octopus',
    firstName: 'John',
    LastName: 'Dou'
  }, 
  {
    id: 'as25',
    nick: 'Star',
    firstName: 'Andy',
    LastName: 'Lee'
  }, 
  {
    id: 'as77',
    nick: 'Wally',
    firstName: 'Liza',
    LastName: 'Corty'
  }
];

const newArr = users.map((element) => {
  const temp = element.id;
  delete element.id;
  return  {[temp]:element}
 
});
console.log(newArr)