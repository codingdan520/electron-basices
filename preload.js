const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendMainInfo: () => ipcRenderer.invoke('render-info'),
    capturerFunc: async () => {
        // 接收返回的数组对象
        const res = await ipcRenderer.invoke('capturer-event')
        console.log(res);
    }
})