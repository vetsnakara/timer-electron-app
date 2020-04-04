const { app, Tray, Menu } = require('electron')

class TimerTray extends Tray {
  constructor (iconPath, mainWindow) {
    super(iconPath)

    this.mainWindow = mainWindow
    this.setToolTip('Timer App')
    this.on('click', this.handleClick)
    this.on('right-click', this.handleRightClick)
  }

  handleClick (e, bounds) {
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide()
    } else {
      const { x, y } = bounds
      const { width, height } = this.mainWindow.getBounds()

      this.mainWindow.setBounds({
        x: x - Math.floor(width / 2),
        y: y - height,
        height,
        width
      })

      this.mainWindow.show()
    }
  }

  handleRightClick (e) {
    const menyConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ])

    this.popUpContextMenu(menyConfig)
  }
}

module.exports = TimerTray
