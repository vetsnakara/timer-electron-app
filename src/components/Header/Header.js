import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
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
