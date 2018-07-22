const { app, BrowserWindow, ipcRenderer } = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
const url = require("url")
const path = require("path")
const DEV = false

function createWindow() {
  // Create the browser window.
  var width = 986
  var height = 570
  win = new BrowserWindow({
    width: width,
    maxWidth:DEV ==true? null:width,
    minWidth:width,
    height: height,
    maxHeight: DEV ==true? null:height,
    minHeight:height,

    center:true,
    fullscreenable:DEV ==true? true:false,
    maximizable:DEV ==true? true:false,
    title: "HariSree",
    icon: "./resources/icon/logo.ico",
    darkTheme: true,
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    webPreferences: {
      devTools: DEV ==true? true:false
      // allowRunningInsecureContent: true,
      // webSecurity: false
    }
  })

  // and load the index.html of the app.
  //   win.loadFile("index.html")
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/resources/html/about.html'),
    protocol: 'file:'
  }));


  // Open the DevTools.
  if(DEV)
    win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  const ipc = require('electron').ipcMain
  ipc.on('change-page', function (event, arg) {
    // console.log("here",arg)
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/resources/html/'+arg+'.html'),
      protocol: 'file:'
    }));
  });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.