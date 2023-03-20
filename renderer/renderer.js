const button = document.querySelector('#sendInfo');

button.addEventListener('click', async () => {

    window.electronAPI.sendMainInfo();
})