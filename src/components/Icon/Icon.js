import React from 'react'

import styles from './styles.scss'
import { block } from '../../utils'

const b = block(styles)

const createStyles = ({
  size,
  color
}) => {
  return {
    width: 2.2 * size,
    height: 2.2 * size
  }
}

class Icon extends React.Component {
  render () {
    const {
      component: Component,
      color,
      size = 20,
      className
    } = this.props

    const styles = createStyles({
      size,
      color
    })

    return (
      <div className={className}>
        <span
          className={b()}
          style={styles}
        >
          <Component
            size={size}
            color={color}
          />
        </span>
      </div>
    )
  }
}

export default Icon
