
const planetInitializer = () => {
  const planet = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diametr: null,
  }
  return planet
}

const initializer = () => {
  return {
    planet: planetInitializer(),
  }
}

const getPlanetRandomId = () => {
  return Math.ceil(Math.random() * (19 - 2) + 2);
}

const _getItemId = (item) => {
  const regExp = /\/([0-9]{1,})/
  return item.match(regExp)[1]
}

const transformPlanet = (planet) => {
  const { name, population, rotation_period, diameter } = planet
  const id = _getItemId(planet.url)
  return {
    id, name, population, rotationPeriod: rotation_period, diameter
  }
}

const transformStarship = (startship) => {
  const { name, population, rotation_period, diameter } = startship
}
const transformPerson = (person) => {
  const { name, population, rotation_period, diameter } = person
}

export {
  planetInitializer,
  initializer,
  getPlanetRandomId,
  transformPlanet,
  transformStarship,
  transformPerson,
}
