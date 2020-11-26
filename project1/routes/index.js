const express = require('express');
const axios = require('axios');
const router = express.Router();

const person = {
  listFilms: '',
  listPeople: ''
};

const listFilms = new Promise((res, rej) => {
  axios('https://swapi.dev/api/films/')
  .then((res1) => {
    const filmsArr = res1.data.results;
    return filmsArr
  })
  .then((res2) => {
    person.listFilms = '';
    let str = '<select class="list-films">'
    res2.map(el =>{
      str = `${str}<option value="${el.episode_id}" selected>${el.title}</option>`;
    });
    person.listFilms = `${str}</select>`;
    res(str);
  })
  .catch((err) => { console.log('axios err', err)});
});

router.get('/', function(req, res) {
  Promise.resolve(listFilms)
    .then((str4) => {
      person.listFilms = str4;
      res.render('index', person);
    })
    .catch(err => {
      console.log(err.response.data)
      person.info = err.response.data.detail;
    });
});

router.get('/:id', function(req, res) {
  axios('https://swapi.dev/api/films/')
  .then((res1) => {
    const filmsArr = res1.data.results;
    return filmsArr;
  })
  .then((res2) => {
    const arr = [];
    res2.forEach(el =>{
      if(el.episode_id == req.params.id) {
        arr.push(el.characters)
      }
    })
    const peoplePromises = arr.flat().map(el => {
      return axios.get(el)
    })
    Promise.all(peoplePromises)
    .then((res3) => {
      const namesArr = res3.map(el => el.data.name);
      let str = '<ul class="list-people">'
      namesArr.map(el =>{
          str = `${str}<li>${el}</li>`;
      });
      person.listPeople = `${str}</ul>`;
    })
    res.render('index', person);
   })
  .catch(err => {
    console.log(err.response.data)
    person.info = err.response.data.detail;
  });
});


module.exports = router;