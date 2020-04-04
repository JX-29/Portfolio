
    'use strict';
    let engHide = document.querySelectorAll('.eng__hide_block'); //спрятанные блоки на английском языке
    let rusHide = document.querySelectorAll('.rus__hide_block'); //спрятанные блоки на русском языке
    let engShow = document.querySelectorAll('.eng__show_block'); //видимые блоки на английском языке
    let rusShow = document.querySelectorAll('.rus__show_block'); //видимые блоки на русском языке
    let switchBtn = document.querySelectorAll('.lang-switch__input')[0]; //переключатель

    switchBtn.onclick = function() {
        if (switchBtn.checked) { //при переключении ищет все рускоязычные блоки, скрывает их и заменяет англоязычными
            for (let i = 0; i < rusShow.length; i++) {
                rusShow[i].classList.add('rus__hide_block');
                rusShow[i].classList.remove('rus__show_block');
                engHide[i].classList.add('eng__show_block');
                engHide[i].classList.remove('eng__hide_block');
                
                
            }
        }
        else {
            for (let i = 0; i < engHide.length; i++) { //при переключении ищет все рускоязычные блоки, скрывает их и заменяет англоязычными
                engHide[i].classList.add('eng__hide_block');
                engHide[i].classList.remove('eng__show_block');
                rusShow[i].classList.add('rus__show_block');
                rusShow[i].classList.remove('rus__hide_block');
            }
        }
        
    };





