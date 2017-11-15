import { app, BrowserWindow, screen,dialog,Menu } from 'electron'
import menuUtil from "./util/menu.js";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}



let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    menuUtil();
    var size = screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        height: size.height,
        useContentSize: true,
        width: size.width,

        titleBarStyle: "hidden"
    })

    mainWindow.loadURL(winURL)
    
  
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})