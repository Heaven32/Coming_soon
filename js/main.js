const Chess = () => {
    let mainBlock = document.querySelector('.main');
    let block;
    let flag = true;

    let figure = {
        0 : ['&#9814;', '&#9816;', '&#9815;', '&#9812;', '&#9813;','&#9815;', '&#9816;','&#9814;'],
        1 : ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;','&#9817;', '&#9817;','&#9817;'],
        6 : ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;','&#9823;', '&#9823;','&#9823;'],
        7 : ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;','&#9821;', '&#9822;','&#9820;'],
    };

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j  == 0){
                flag = !flag;
            }; 
            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i] !== undefined && figure[i][j] !== undefined) {
                block.innerHTML = figure[i][j];
            }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

Chess();