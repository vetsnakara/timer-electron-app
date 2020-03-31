import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import './styles/index.scss'

ReactDOM.render(<App />, document.querySelector('#root'))

if (process.env.NODE_ENV === 'development') {
  module.hot.accept()
}
