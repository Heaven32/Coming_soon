let start = document.querySelector('.start');
let btn = document.getElementById('btn');
let icon = document.querySelector('.icon');
let timeControl = document.querySelector('.time');
let sumMin = '';
let sumHours = '';

btn.addEventListener('click',() => {
    start.style.display = 'none';
    let valInput = timeControl.value;
    let temp = new Date();
    let temp1 = `${temp.getHours()}:${temp.getMinutes()}`;

    let getDate = (string) => new Date(0,0,0, string.split(':')[0], string.split(':')[1]);
    let different = (getDate(valInput) - getDate(temp1));

    let hours = Math.floor((different/(1000*60*60)) % 24);
    let minutes = Math.round((different/1000/60) % 60);
    sumMin = minutes * 60;
    sumHours = (hours * 60) * 60;
    let sum = sumMin + sumHours;
    setTimeout(function tick() {
        if(sum > 0) {
            icon.classList.remove('icon1');
            icon.classList.add('icon');
            sum -= 1;
            let hour = Math.floor(sum / 60 / 60);
            let minute = Math.floor(sum / 60) - (hours * 60);
            let second = sum % 60;
            icon.innerHTML = `${hour}:${minute}:${second}`
            setTimeout(tick, 1000);
        } else {
            icon.classList.add('icon1');
            icon.classList.remove('icon');
        };
      });
    icon.style.display = 'inline-block';
});