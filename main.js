const { app, BrowserWindow, ipcMain } = require('electron');

// 禁用当前应用程序的硬件加速, 注释此行会在vscode控制台启动硬件加速
app.disableHardwareAcceleration();

const path = require('path');

// 创建一个窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
    })

    // 加载静态资源
    win.loadFile('index.html');
}

// app.whenReady表示主进程加载完成，返回一个promise 
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        // 此处解决mac系统关闭app后，但程序坞中还存在图标，再次点击可以重新创建进程
        if(BrowserWindow.getAllWindows.length === 0) createWindow();
    })
})

// 关闭所有窗口
app.on('window-all-closed', () => {
    // electron 运行在三个环境（win32 Windows系统、linux Linux系统、 darwin Mac系统）
    // 此处解决的是非mac系统，程序退出进程 (Mac系统关闭app会保留在程序坞中)
    if(process.platform !== 'darwin') app.quit();
})
