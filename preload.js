const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendMainInfo: () => ipcRenderer.invoke('render-info')
})