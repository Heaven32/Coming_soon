const mainBlock = document.querySelector('.main');
const body = document.querySelector('body');

// 1) Сгенерировать массив паркомест.
const createArray = (temp) => {
    let arr = [];
    for(let i = 1; i <= temp; i++) {
        arr.push({'id': i,  
                  'occupied': true,
                  'time': 10,
        });
    };
    return arr;
};
const spaces = createArray(5);
console.log(spaces);

// 2) Функция подсчета количества занятых и свободных паркомест.
const quantityOccupied = (arr) => {
    let counterFalse = 0;
    let counterTrue = 0;
    const quantity = arr.map(item => {
        return item.occupied
    });
    quantity.forEach(item => !item ? counterFalse++ : item);
    quantity.forEach(item => item ? counterTrue++ : item);
    console.log(`Количество свободныx паркомест - ${counterFalse}`);
    console.log(`Количество занятых паркомест - ${counterTrue}`);
};
quantityOccupied(spaces);

// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 
const createBlock = () => {
    const time = moment().startOf('hour').fromNow();
    return spaces.map(i => {
        mainBlock.innerHTML += `<div class="parking_place">
                                    <div class='id'>id - ${i.id}</div>
                                    <div class='occupied'>Свободно - ${i.occupied}</div>
                                    <div class='time'>Время - ${time}</div>
                                </div>`  
    });
}
createBlock();

//4) Также на странице отобразить время из переменной currentTime.
const div = document.createElement('div');
div.classList.add('current_time');
body.prepend(div);
const currentTime = setInterval(() => {
    div.innerHTML = `Текущее время - ${moment().format('LTS')}`;
}, 1000);

//5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в котором нужно ввести время занимания парковки.

    
