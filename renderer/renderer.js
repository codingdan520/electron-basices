const button = document.querySelector('#sendInfo');

button.addEventListener('click', async () => {
    console.log('向主进程传递消息');
    const text = document.querySelector('.app').innerHTML;
    window.electronAPI.sendMainInfo(text);
})