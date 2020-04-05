

    
    'use strict';
    let engHide = document.querySelectorAll('.eng__hide_block'); //спрятанные блоки на английском языке
    let rusHide = document.querySelectorAll('.rus__hide_block'); //спрятанные блоки на русском языке
    let engShow = document.querySelectorAll('.eng__show_block'); //видимые блоки на английском языке
    let rusShow = document.querySelectorAll('.rus__show_block'); //видимые блоки на русском языке
    let switchBtn = document.querySelectorAll('.lang-switch__input')[0]; //переключатель

    switchBtn.onclick = function() {
        if (switchBtn.checked) { //при переключении ищет все рускоязычные блоки, скрывает их и заменяет англоязычными
            for (let i = 0; i < rusShow.length; i++) {
                rusShow[i].classList.add('rus__hide_block'); //скрытие русских блоков
                rusShow[i].classList.remove('rus__show_block'); //скрытие русских блоков
                engHide[i].classList.add('eng__show_block'); //добавление русскоязычных
                engHide[i].classList.remove('eng__hide_block'); //добавление русскоязычных
            
            }
        }
        else {
            for (let i = 0; i < engHide.length; i++) { //при переключении ищет все англоязычные блоки, скрывает их и заменяет англоязычными
                engHide[i].classList.add('eng__hide_block'); //скрытие англоязычных блоков
                engHide[i].classList.remove('eng__show_block'); //скрытие англоязычных блоков
                rusShow[i].classList.add('rus__show_block'); //добавление русскоязычных
                rusShow[i].classList.remove('rus__hide_block'); //добавление русскоязычных

            }
        }
        
    };





