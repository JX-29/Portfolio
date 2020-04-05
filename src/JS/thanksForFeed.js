'use strict';

let thanksHide = document.querySelectorAll('.contact-form__thanks-box_hide'); //спрятанные блоки на английском языке
let thanksShow = document.querySelectorAll('.contact-form__thanks-box_show'); //видимые блоки на английском языке
let hideBtn = document.querySelectorAll('.button__submit_hide')[0]; //переключатель
let showBtn = document.querySelectorAll('.button__submit_show')[0]; //переключатель

showBtn.onclick = function() {
    thanksShow.classList.add('contact-form__thanks-box_show'); //скрытие русских блоков
    thanksShow.classList.remove('contact-form__thanks-box_hide'); //скрытие русских блоков
};

hideBtn.onclick = function() {
    thanksHide.classList.add('contact-form__thanks-box_hide'); //скрытие русских блоков
    thanksHide.classList.remove('contact-form__thanks-box_show'); //скрытие русских блоков
};