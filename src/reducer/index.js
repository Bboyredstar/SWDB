import { planetInitializer } from '../helpers'
export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PLANET':
      return {
        ...state,
        planet: { ...action.payload },
      }
    case 'RESET_PLANET':
      console.log(action);
      return {
        ...state,
        planet: planetInitializer()
      }


  }
}
