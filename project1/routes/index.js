const { text } = require('express');
var express = require('express');
var router = express.Router();
const texts = require('../models/db');

const page = {
  text:'',
  pagination:'',
};

const func = () => {
  page.pagination = '';
  texts.forEach((i,x) => {
    str = `<a href='${x+1}'>${x+1}</a>`;
    return page.pagination += str;
  });
};
func();

router.get('/', (req, res) => {
  page.text = texts[0];
  func();
  res.render('index', page);
});

router.get('/:id', (req, res) => {
  page.text = texts[Number(req.params.id) - 1];
  res.render('index', page);
});

module.exports = router;