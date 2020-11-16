const { text } = require('express');
var express = require('express');
var router = express.Router();
const axios = require('axios');
//const texts = require('../models/db');


// const page = {
//   text:'',
//   pagination:'',
// };

// const func = (temp) => {
//   page.pagination = '';
//   texts.forEach((elem,index) => {
//     const str1 = `<a href='${index+1}'>${index+1}</a>`;
//     const str2= `<a href='${index+1}' class='none'>${index+1}</a>`;
//     if(index == temp){
//       page.pagination += (str2 - 1);
//     } else {
//       page.pagination += str1;
//     }
//     return page
//   });
// };

// router.get('/', (req, res) => {
//   page.text = texts[0];
//   func(Number(req.params.id - 1));
//   res.render('index', page);
// });

// router.get('/:id', (req, res) => {
//   page.text = texts[Number(req.params.id) - 1];
//   func(Number(req.params.id - 1));
//   res.render('index', page);
// });

new Promise((resolve, reject) => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((responce) => {
      let img = '';
      img = responce.data;
      console.log(img)
      router.get('/', (req, res) => {
        str = img.message;
        console.log(str)
          res.render('index', str);
        str = '';
      });
    })
    .catch((err) => console.log('err axios:', err))
}) 

module.exports = router;