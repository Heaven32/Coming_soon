
const list = document.querySelector('.list-films');

document.addEventListener('change', () => {
    document.location.replace(`/${list.value}`);
    
})

