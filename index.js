/* eslint-disable no-new */

const path = require('path')
const { app } = require('electron')

const MainWindow = require('./app/MainWindow')
const TimerTray = require('./app/TimerTray')

let htmlURL
let iconPath

app.allowRendererProcessReuse = true

if (process.env.NODE_ENV === 'production') {
  htmlURL = path.join(__dirname, 'build', 'index.html')
  iconPath = path.join(__dirname, 'build', 'favicon.png')
} else {
  htmlURL = 'http://localhost:9000'
  iconPath = path.join(__dirname, 'src', 'favicon.png')
}

app.on('ready', () => {
  const mainWindow = new MainWindow(htmlURL)
  new TimerTray(iconPath, mainWindow)
})

console.log('iconPath:', iconPath)
console.log('HTML_URL:', htmlURL)
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
