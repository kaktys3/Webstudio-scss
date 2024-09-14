let titleButton = document.querySelector('.title__button');
let modalWindows = document.querySelector('.modal-windows');
let divMain2GeneralButton = document.querySelector('.div-main2-general__button');

titleButton.addEventListener('click', () => {
    modalWindows.classList.add('active');
});

divMain2GeneralButton.addEventListener('click', (e) => {
    modalWindows.classList.remove('active');
});