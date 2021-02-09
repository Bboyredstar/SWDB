import { transformPlanet, transformPerson, transformStarship } from './index.js'

export class swapiRequests {
  async getAllPeoples() {
    try {
      const response = await fetch('/api/people')
      const peoples = await response.json()
      return peoples.results.map(transformPerson)
    } catch (error) {
      throw new Error('Request error!')
    }
  }
  async getPerson(id = 1) {
    try {
      const response = await fetch(`/api/people/${id}`)
      const person = await response.json()
      return transformPerson(person)
    } catch (error) {
      throw new Error('Request error!')
    }
  }
  async searchPeople(name = '') {
    try {
      const response = await fetch(`/api/people/?search=${name}`)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Request error!')
    }
  }
  async getAllPlanets() {
    try {
      const response = await fetch('/api/planets')
      if (!response.ok) {
        return { status: response.status, message: response.statusMessage }
      }
      const planets = await response.json()
      return planets.results.map(transformPlanet)
    } catch (error) {
      throw new Error('Request error!', error)
    }
  }
  async getPlanet(id = 1) {
    try {
      const response = await fetch(`/api/planets${id}`)
      if (!response.ok) {
        throw new Error(response.statusText || `Problem with request!`)
      }
      const planet = await response.json()
      return transformPlanet(planet)
    } catch (err) {
      throw new Error(err.message)
    }
  }
  async searchPlanet(name = '') {
    try {
      const response = await fetch(`/api/planets/?search=${name}`)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Request error!')
    }
  }

  async getAllStarships() {
    try {
      const response = await fetch('/api/starships')
      const starships = await response.json()
      return starships.results.map(transformStarship)
    } catch (error) {
      throw new Error('Request error!' + error)
    }
  }

  async getStarship() {
    try {
      const response = await fetch('/api/starships')
      const starship = await response.json()
      return transformStarship(starship)
    } catch (error) {
      throw new Error('Request error!' + error)
    }
  }
}
