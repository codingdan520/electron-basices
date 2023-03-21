const { Menu } = require('electron');


const menuBuilder = Menu.buildFromTemplate([
    {
        label: "electron",
        submenu: [
            {
                label: '新建',
                accelerator: 'ctrl+I',
                click: () => {
                    console.log('ctrl+I');
                }
            },
            {
                label: '打开',
                accelerator: 'ctrl+O',
                click: () => {
                    console.log('ctrl+O');
                }
            },
            {
                label: '编辑',
                accelerator: 'ctrl+P',
                click: () => {
                    console.log('ctrl+P');
                }
            },
        ]
    }
]);

module.exports = menuBuilder;