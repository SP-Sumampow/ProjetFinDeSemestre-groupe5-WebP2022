
/************ BURGER MENU ************/

var burger = document.querySelector('.container');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header')

burger.addEventListener('click', function () {
    burger.classList.toggle('is-click')
    menu.classList.toggle('is-open-menu')
    header.classList.toggle('header-is-open')
});