const { BrowserWindow } = require('electron')

class MainWindow extends BrowserWindow {
  constructor (htmlUrl) {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: {
        backgroundThrottling: false
      }
    })

    this.loadURL(htmlUrl)
  }
}

module.exports = MainWindow
