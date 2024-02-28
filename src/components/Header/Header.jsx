import React from 'react'
import style from './Header.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

  const navigate = useNavigate();

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
          <form onSubmit={(e) => { e.preventDefault(), navigate(`/search/${e.target.search.value}`) }}>
            <input name='search' type="text" placeholder='Indtast søgeord' />
          </form>
        </div>
        <div className={style.blackThing} />
      </div>
    </>
  )
}
