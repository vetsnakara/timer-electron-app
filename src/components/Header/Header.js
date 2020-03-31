import React from 'react'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'
import block from '../../utils/bem'

import styles from './styles.scss'

const b = block(styles)

const Header = ({ className }) => {
  return (
    <header className={cn(className, b())}>
      <nav>
        <NavLink to='/'>Active Task</NavLink>
        <NavLink to='/tasks'>All Tasks</NavLink>
      </nav>
      <p>
        <NavLink to='/settings'>Settings Logo</NavLink>
      </p>
    </header>
  )
}

export default Header
