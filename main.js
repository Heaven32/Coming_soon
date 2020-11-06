const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const http = require('http');

const URL = 'https://auto.ria.com/uk/search/?category_id=1&marka_id=2233&model_id=0&city%5B0%5D=0&state%5B0%5D=0&s_yers%5B0%5D=0&po_yers%5B0%5D=0&price_ot=&price_do=';
let arr = [];
const PORT = 3000;

// 1) Парсер теслы;
const parsTesla = () => {
  request(URL, (error, response, body) => {
    if (!error) {
      const $ = cheerio.load(body);
      const carArr = [];
      const addressArr = [];
      const usdArr = [];
      const uahArr = [];
      $('.blue.bold').text((index, text) => carArr.push(text));
      $('.address').text((index, text) => addressArr.push(text.slice(3, -1)));
      const address = addressArr.map((i) => {
        const temp = Number(i.replace(/\s/g, ''));
        return temp;
      });
      $('[data-currency="USD"]').text((index, text) => usdArr.push(text));
      const usdA = usdArr.map((i) => {
        const temp = Number(i.replace(/\s/g, ''));
        return temp;
      });
      $('[data-currency="UAH"]').text((index, text) => uahArr.push(text));
      const uahA = uahArr.map((i) => {
        const temp = Number(i.replace(/\s/g, ''));
        return temp;
      });
      carArr.forEach((i, index) => {
        arr.push({
          model: i,
          years: address[index],
          USD: usdA[index],
          UAH: uahA[index],
        });
      });
      buildTable(arr);
    } else {
      console.log(`Got an error: ${error}`);
    }
  });
};
parsTesla();

// 2) Написать функцию, которая генерирует текущую дату в формате строки 'YYYYMMDD-HHmmSS';
const Times = () => {
  const d = new Date();
  const date = d.toISOString().split('T')[0].replace(/-/g, '');
  const time = d.toTimeString().split(' ')[0].replace(/:/g, '');
  return `${date}-${time}`;
};

// 3) Написать функцию формирования CSV файла из массива, разделитель точка с запятой (";"), текст в двойных кавычках;
const formationCSV = data => data.map(row => `"${row.model}";"${row.years}";"${row.USD}";"${row.UAH}"`).join('\n');

// 5) Написать функцию формирования строки для вставки таблицы в html, теги <table></table>;
const buildTable = (data) => {
  let table = '';
  data.forEach((x) => {
    const row = `<tr>
              <td>${x.model}</td>
              <td>${x.years}</td>
              <td>${x.USD}</td>
              <td>${x.UAH}</td>
            </tr>`;
    table += row;
  });
  return `<table>${table}</table>`;
};

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  console.log('req.url:', req.url);
  if (req.url === '/tesla') {
    parsTesla();
    res.write('<a href="/tesla">обновить данные по Тесле</a>');
    res.write(`${buildTable(arr)}`);
    try {
      // 4) Написать функцию сохранения файла CSV на диск
      fs.writeFileSync(`tesla_${Times()}.csv`, formationCSV(arr));
      res.write(`<a href="${`tesla_${Times()}.csv`}" download>tesla_${Times()}.csv</a>`);
    } catch (error) {
      console.error(`Got an error: ${error.message}`);
    }
    arr = [];
  } else {
    res.write('<a href="/tesla">обновить данные по Тесле</a>');
  }
  res.end();
}).listen(PORT, () => {
  console.log('server running');
});
