const data = require('./model');

const findArr = data.filter(i => {
    let temp = Number(i.mass);
    if (temp > 100) {
      return i
    }
})

const arr = findArr.map(x => {
    return x.name
})
console.log(arr)
module.exports = findArr;