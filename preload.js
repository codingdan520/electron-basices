const { contextBridge, ipcRenderer } = require('electron');
const remote = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
    sendMainInfo: () => ipcRenderer.invoke('render-info'),
})

ipcRenderer.on('context-menu-command', (msg) => {
    console.log(msg);
})

console.log(remote);
//右键餐单
// const menu = new Menu();
// menu.append(new MenuItem({
//     label: '放大',
//     click:function ()  {
//         console.log('item 1 clicked')
//     }
// }));
// menu.append(new MenuItem({type: 'separator'}));//分割线
// menu.append(new MenuItem({label: '缩小', type: 'checkbox', checked: true}));//选中

// window.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     menu.popup({window: getCurrentWindow()})
// }, false)