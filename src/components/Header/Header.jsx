import React from 'react'
import cn from 'classnames'
import styles from './Header.module.css'
import logo from '../../assets/Saber.svg'
export const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <h1 className={cn(styles.logo)}>SW DB</h1>
      <nav className={cn(styles.navigation)}>
        <a className={cn(styles.routes)}>
          People
          <img src={logo} alt="" className={cn(styles.underRoute)} />
        </a>
        <a className={cn(styles.routes)}>
          Planets
          <img src={logo} alt="" className={cn(styles.underRoute)} />
        </a>
        <a className={cn(styles.routes)}>
          Starships
          <img src={logo} alt="" className={cn(styles.underRoute)} />
        </a>
      </nav>
    </header>
  )
}
