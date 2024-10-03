import React from 'react'
import Canvas from './canvas'
import Customiser from './pages/customiser'
import Home from './pages/home'

const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Customiser/>
    </main>
  )
}

export default App