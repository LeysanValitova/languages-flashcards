import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navigation.module.css'

function Navigation() {
  return (
    <div className={style.navBox}>

        <Link to={'/table'} className={style.logo}>PerfectEnglish</Link>
        <nav className={style.nav}>
            <Link to='/table'>Table</Link>
            <Link to='/game'>Game</Link>
        </nav>
    </div>
  )
}

export default Navigation