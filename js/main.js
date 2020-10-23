const itemOne = document.querySelector('.item-1');
const itemTwo = document.querySelector('.item-2');
const itemThree = document.querySelector('.item-3');

const boxOne = document.querySelector('.box-1');
const boxTwo = document.querySelector('.box-2');
const boxThree = document.querySelector('.box-3');


const borderFunc = (el, time, callback) => {
    setTimeout(() => {
        el.classList.add('border')
        el.style.height = '100px';
        
        if (callback) callback();
    }, time);
};

borderFunc(itemOne, 3453, (elem) => {
    borderFunc(itemTwo, 2563, () => {
        itemOne.innerHTML = 'btn';
        itemOne.addEventListener('click', () => {
            boxOne.classList.add('border')
        })
        borderFunc(itemThree, 2163, () => {
            itemTwo.innerHTML = 'btn';
            itemTwo.addEventListener('click', () => {
                boxTwo.classList.add('border')
            })
            borderFunc(itemThree, 1498, () => {
                itemThree.innerHTML = 'btn';
                itemThree.addEventListener('click', () => {
                    boxThree.classList.add('border')
                })
            })
        })
        
    })
    
});
