const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendMainInfo: (msg) => ipcRenderer.invoke('render-info', msg)
})