import React from 'react'
import Color from 'color'

import styles from './styles.scss'
import { block } from '../../utils'

const b = block(styles)

const createStyles = ({
  size,
  hover,
  color,
  disabled
}) => {
  let bgColor

  if (disabled) {
    bgColor = 'transparent'
  } else {
    bgColor = hover
      ? Color(color).alpha(0.1).toString()
      : 'transparent'
  }

  return {
    width: 2.2 * size,
    height: 2.2 * size,
    backgroundColor: bgColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all .2s ease-in-out'
  }
}

class IconButton extends React.Component {
  state = {
    hover: false
  }

  handleMouseOver = color => {
    this.setState({
      hover: true
    })
  }

  handleMouseOut = () => {
    this.setState({
      hover: false
    })
  }

  render () {
    const {
      component: Component,
      color,
      size = 20,
      onClick,
      className,
      disabled
    } = this.props

    const { hover } = this.state

    const styles = createStyles({
      size,
      hover,
      color,
      disabled
    })

    return (
      <div className={className}>
        <button
          className={b()}
          onClick={disabled ? () => {} : onClick}
          style={styles}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Component
            size={size}
            color={disabled
              ? Color(color).alpha(0.5).toString()
              : color}
          />
        </button>
      </div>
    )
  }
}

export default IconButton
