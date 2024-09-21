let titleButton = document.querySelector('.title__button');
let modalWindows = document.querySelector('.div-modal-overlay');
let divMain2GeneralButton = document.querySelector('.div-header-general__link');

titleButton.addEventListener('click', () => {
    modalWindows.classList.add('active');
});

divMain2GeneralButton.addEventListener('click', (e) => {
    modalWindows.classList.remove('active');
});