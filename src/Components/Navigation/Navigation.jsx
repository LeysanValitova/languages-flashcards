import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navigation.module.css'

function Navigation() {
  return (
    <div className={style.navBox}>

        <Link to={'/'} className={style.logo}>PerfectEnglish</Link>
        <nav className={style.nav}>
            <Link to='/'>Home</Link>
            <Link to='/table'>Table</Link>
            <Link to='/game'>Game</Link>
        </nav>
    </div>
  )
}

export default Navigation