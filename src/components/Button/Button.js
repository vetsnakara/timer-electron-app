import React from 'react'
import cn from 'classnames'

import styles from './styles'
import { block } from '../../utils'

const b = block(styles)

const Button = ({
  className,
  color,
  children,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: color
      }}
      className={cn(className, b())}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
