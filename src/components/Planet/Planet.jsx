import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../../context'
import { swapiRequests, getPlanetRandomId } from '../../helpers'
import {Loader} from '../../ui/Preloader'
import styles from './Planet.module.css'
import cn from 'classnames'


// Разбить ul на компоненты 
export const Planet = () => {

  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const swapi = new swapiRequests()
    swapi.getPlanet(getPlanetRandomId())
      .then(payload => dispatch({ type: 'UPDATE_PLANET', payload }))
      .then(()=>setLoading(false))
  }, [])

  const { state: { planet: { id, name, population, rotationPeriod, diameter } }, dispatch } = useContext(ItemContext);

  return (
    <div className={cn(styles.planetSection, 'jumbotron rounded')}>
      {loading? <Loader/>:
      <>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className={cn(styles.planetImg, 'rounded')} />
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
      </>}
    </div>
  )

}