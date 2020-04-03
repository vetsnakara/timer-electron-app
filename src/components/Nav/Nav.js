import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCog as SettingsIcon } from 'react-icons/fa'

import styles from './styles.scss'
import { block } from '../../utils'

const b = block(styles)

const activeStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.05)'
}

const Nav = ({ className }) => {
  return (
    <nav className={b()}>
      <div>
        <NavLink
          className={b('link')}
          activeStyle={activeStyle}
          to='/' exact
        >
          Active
        </NavLink>

        <NavLink
          className={b('link')}
          activeStyle={activeStyle}
          to='/tasks'
        >
          All
        </NavLink>
      </div>
      <NavLink
        className={b('link')}
        activeStyle={activeStyle}
        to='/settings'
      >
        <SettingsIcon size={20} />
      </NavLink>
    </nav>
  )
}

export default Nav
