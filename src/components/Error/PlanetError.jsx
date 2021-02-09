import React from 'react'
import cn from 'classnames'
import styles from './PlanetError.module.css'

export const PlanetError = () =>{
  return(
    <div className={cn(styles.errorSection)}>
      <h1 className={cn(styles.errorTitle)}>Oops, we have a problem with request!</h1>
      <h4 className={cn(styles.errorSubtitle)}>Droids will fix it soon</h4>
    </div>  
  )
} 