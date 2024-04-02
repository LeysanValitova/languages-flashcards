import React from 'react'
import style from './Navigation.module.css'

function Navigation() {
  return (
    <div className={style.navBox}>
        <div className={style.logo}>PerfectEnglish</div>
        <nav className={style.nav}>
            <a href="#">Table</a>
            <a href="#">Game</a>
        </nav>
    </div>
  )
}

export default Navigation