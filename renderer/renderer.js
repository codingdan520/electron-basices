const button = document.querySelector('#sendInfo');
const capturer = document.querySelector('#btn');

button.addEventListener('click', async () => {

    window.electronAPI.sendMainInfo();
})

capturer.addEventListener('click', () => {
    window.electronAPI.capturerFunc();
})