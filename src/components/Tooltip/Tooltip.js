import React from 'react'
import Hover from '../Hover'

import styles from './styles'
import { block } from '../../utils'

const b = block(styles)

const Tooltip = ({ text, children, disabled = false }) => {
  return (
    <Hover>
      {hover => (
        <div className={b('wrapper')}>
          {!disabled && hover && <div className={b('content')}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  )
}

export default Tooltip
