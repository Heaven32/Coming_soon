// 1) создаём 2 папки, в одну папку кладём картинку,  например SVG-файл. Эту картинку перемещаем из одной папки в другую.
const fs = require('fs').promises;

async function moveFile(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log(`Moved file from ${source} to ${destination}`);
  } catch (error) {
    console.error(`Got an error trying to move the file: ${error.message}`);
  }
}

moveFile('folder_first/images.jpg','folder_second/images.jpg');

// 2) из прошлой домашки делаем request на dou.ua, добываем массив картинок, сохраняем его в файл arr.txt.
const request = require('request');

request('https://www.dou.ua/', (error, response, body) => {
    let str = body.match(/<img[^>]+src="http([^">]+)"/g).slice(46, 52);
    let adress = str.map(i => {
      return i.match(/http([^">]+)/g)
    })
    let arr = adress.flat();

    if(error) {
                console.log(error);
    } else {
        fs.writeFile('arr.txt', arr, (err) => {});
        
    }
});

// 3) запускаем сервер на встроенном https, выводим картинки из файла arr.txt.
const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000); 

console.log('Server running on port 3000.');
 