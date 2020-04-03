import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCog as SettingsIcon } from 'react-icons/fa'

import styles from './styles.scss'
import { block } from '../../utils'

const b = block(styles)

const Nav = ({ className }) => {
  return (
    <nav className={b()}>
      <div>
        <NavLink className={b('link')} to='/' exact>Active</NavLink>
        <NavLink className={b('link')} to='/tasks'>All</NavLink>
      </div>
      <NavLink className={b('link')} to='/settings'>
        <SettingsIcon size={20} />
      </NavLink>
    </nav>
  )
}

export default Nav
