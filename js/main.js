let start = document.querySelector('.start');
let btn = document.getElementById('btn');
let icon = document.querySelector('.icon');
let timeControl = document.querySelector('.time');
let sumMin = '';
let sumHours = '';
let different;
let numb = '23:59';

btn.addEventListener('click',() => {
    start.style.display = 'none';
    let valInput = timeControl.value;
    let temp = new Date();
    let temp1 = `${temp.getHours()}:${temp.getMinutes()}`;
    let getDate = (string) => new Date(0,0,0, string.split(':')[0], string.split(':')[1]);
    if(getDate(valInput) < getDate(temp1)){
        let nowHours = (Number(valInput[0] + valInput[1])*60*60)*1000;
        let nowMinutes = (Number(valInput[3] + valInput[4])*60)*1000;
        let now = nowHours + nowMinutes + 60000;
        different = (getDate(numb) - getDate(temp1)) + now;
    }else {
        different = getDate(valInput) - getDate(temp1);
    }   
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
            let hour = Math.floor(sum / 3600);
            let minute = Math.floor(sum % 3600 / 60);
            let second = Math.floor(sum % 3600 % 60);
            icon.innerHTML = `${hour}:${minute}:${second}`
            setTimeout(tick, 1000);
        } else {
            icon.classList.add('icon1');
            icon.classList.remove('icon');
        };
      });
    icon.style.display = 'inline-block';
});