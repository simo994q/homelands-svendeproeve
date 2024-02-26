import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h1>HomeLands</h1>
        <div className={style.linksAndSearch}>
          <ul>
            <NavLink to='/'>Forside</NavLink>
            <NavLink to='/houses'>Boliger til salg</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </ul>
          <input type="text" placeholder='Indtast søgeord' />
        </div>
        <div className={style.blackThing} />
      </div>
    </>
  )
}
