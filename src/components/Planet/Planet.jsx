import React, { useContext, useEffect} from 'react'
import {useHttp} from '../../hooks'
import { ItemContext } from '../../context'
import { getPlanetRandomId, transformPlanet } from '../../helpers'
import {PlanetDescription} from './PlanetDescription/PlanetDescription.jsx'
import { PlanetImage } from './PlanetImage/PlanetImage'
import {Loader} from '../../ui/Preloader'
import {PlanetError} from '../Error'
import styles from './Planet.module.css'
import cn from 'classnames'


// Разбить ul на компоненты 
export const Planet = () => {
  const {loading,request,error} = useHttp()

  const getPlanet = async () => {
    const id = getPlanetRandomId();
    try {
      const planet = await request(`/api/planets/${id}`)
      const payload = transformPlanet(planet)
      dispatch({ type: 'UPDATE_PLANET', payload })
    }catch(err){
    }
  }
  useEffect(() => {
    getPlanet()
    const updatePlanet = setInterval(getPlanet, 20000);
    return (()=>{
      clearInterval(updatePlanet);
    })
  }, []);


  const { state: { planet: { id, name, population, rotationPeriod, diameter } }, dispatch } = useContext(ItemContext);
  const preloader = loading? <Loader/>:null 
  const errorMsg = error? <PlanetError/>:null
  const hasData = !(loading||error) 
  const content = hasData? <> 
    <PlanetImage id={id} name={name}/>
     <PlanetDescription planet = {{name,population,rotationPeriod,diameter}}/>
     </>:null
  return (
    <div className={cn(styles.planetSection, 'jumbotron rounded')}>
      {preloader}
      {errorMsg}
      {content}
    </div>
  )

}