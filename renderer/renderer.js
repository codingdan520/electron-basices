const button = document.querySelector('#sendInfo');
const box = document.querySelector('.app');

button.addEventListener('click', async () => {
    const res = await window.electronAPI.sendMainInfo();
    box.innerHTML = res;
})