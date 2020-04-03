import React from 'react'

import styles from './styles.scss'
import block from '../../utils/bem'

const b = block(styles)

const Container = ({ children }) => {
  return (
    <div className={b()}>
      {children}
    </div>
  )
}

export default Container
