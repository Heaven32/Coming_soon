
const list = document.querySelector('.list-films');
const option = document.querySelectorAll('option')

console.log('option')
document.addEventListener('change', () => {
    document.location.replace(`/${list.value}`);
    
    option.prop('selected',true);
})

