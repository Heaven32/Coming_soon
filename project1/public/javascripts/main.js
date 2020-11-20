const btn = document.getElementById('btn');
const field = document.querySelector('.inp');

if(btn){
    btn.addEventListener('click', () => {
        document.location.replace(`/${field.value}`);
    });
}

