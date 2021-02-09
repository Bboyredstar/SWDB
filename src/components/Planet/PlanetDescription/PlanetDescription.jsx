import React from 'react'
import cn from 'classnames'
import styles from '../Planet.module.css'

export const PlanetDescription = ( {planet} )=>{
const {name,population,rotationPeriod,diameter} = planet
return(
  <div className={cn(styles.planetDescription)}>
        <h3>{name}</h3>
        <ul className={cn('list-group', 'list-group-flush')}>
          <li className={cn('list-group-item', styles.tight)}>
            <span className={cn('term')}>Population:</span>
            <span className={cn(styles.info, 'text-muted')}>{population}</span>
          </li>
          <li className={cn('list-group-item', styles.tight)}>
            <span className={cn('term')}>Rotation period: </span>
            <span className={cn(styles.info, 'text-muted')}>{rotationPeriod}</span>
          </li>
          <li className={cn('list-group-item', styles.tight)}>
            <span className={cn('term')}>Diametr: </span>
            <span className={cn(styles.info, 'text-muted')}>{diameter}</span>
          </li>
        </ul>
      </div>
)}