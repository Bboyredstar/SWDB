import React, { useReducer } from 'react'
import './App.css'
import cn from 'classnames'
import { reducer } from './reducer'
import { Header, Planet, Navbar } from './components'
import { initializer } from './helpers'
import { ItemContext } from './context'

function App() {
  const [state, dispatch] = useReducer(reducer, initializer())
  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      <div className={cn('container', 'min-vh-100')}>
        <Header />
        <Planet />
        <Navbar />
      </div>
    </ItemContext.Provider>
  )
}
export default App 
