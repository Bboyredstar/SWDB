import React from 'react'
import styles from './Navbar.module.css'
import cn from 'classnames'

export const Navbar = () => {
  return (
    <aside className={cn(styles.aside)}>
      <ul className={cn('list-group')}>
        <li className={cn('list-group-item')}></li>
        <li className={cn('list-group-item')}></li>
        <li className={cn('list-group-item')}></li>
        <li className={cn('list-group-item')}></li>
      </ul>
    </aside>
  )
}
