const express = require('express');
const axios = require('axios');
const router = express.Router();

const starwars = {
  field: '',
  name: '',
  films: '',
  title: '',
  release_date: ''
};

const field = () => {
  return starwars.field = `<input type='text' class='inp' placeholder='ID people'>
  <button type='button' id='btn'>OK</button>` 
}

router.get('/', (req, res) => {
  field();
  res.render('index', starwars);
});

router.get('/:id', (req, res) => {
  field();
  axios.get(`https://swapi.dev/api/people/${req.params.id}`)
  .then((res1) => {
    starwars.films = '';
    starwars.name = res1.data.name;
    const arr = res1.data.films;
    arr.forEach(index => starwars.films +=`<a href='${index}'>${index}</a><br>`);
    return arr;
  }).then((res2) => {
    const arr1 = res2.map(index => Number(index[index.length - 2]));
    axios('https://swapi.dev/api/films/')
    .then((res3) => {
      starwars.release_date = '';
      arr1.map(index => {
        let arr = res3.data.results; 
        return starwars.release_date += `<span>${arr[index - 1].release_date}</span><br>`
      });
      return arr1.map(index => {
        let arr = res3.data.results; 
        return arr[index - 1].title
      });
    })
    .then((res4) => {
      starwars.title = '';
      res4.forEach(index => starwars.title += `<span>${index}</span><br>`);
      res.render('index', starwars)
    })
   })
   .catch((err) => { console.log('axios err', err)});
});

module.exports = router;