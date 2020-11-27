import React from 'react'
import cn from 'classnames'
import styles from './Loader.module.css'
export const Loader = () => {
  // Сделать медаль с логотипами анимация вращения, перспектива z
  return (
    <div className={cn(styles.loader)}>
      <div className={cn(styles.loaderWrapper)}>
        <div className={cn(styles.loaderItem, styles.imperial)}>#</div>
        <div className={cn(styles.loaderItem, styles.rebel)}>$</div>
      </div>
    </div>)
} 