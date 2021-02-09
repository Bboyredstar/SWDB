import React from 'react'
import cn from 'classnames'
import styles from '../Planet.module.css'
export const PlanetImage = ({id,name})=>{
  return(
  <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
  alt={`${name}`} className={cn(styles.planetImg, 'rounded')} />
  )
}