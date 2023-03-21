const { Tray, Menu } = require('electron');

function createTrayMenu(win) {
    return Menu.buildFromTemplate([
        {
            label: 'item-1',
            click: () => {
                console.log(123);
            }
        },
        {
            label: 'toggle',
            click: () => {
                win.isVisible() ? win.hide() : win.show();
            }
        }
    ])
}


function createTray(app, win) {
    // 根目录下图标
    const tray = new Tray('icon.png');
    tray.setToolTip('我的electron');
    tray.setContextMenu(createTrayMenu(win));
    tray.on('click', (e) => {
        if (e.shiftKey) {
            app.quit();
        }
    })
    return tray;
}

module.exports = createTray;