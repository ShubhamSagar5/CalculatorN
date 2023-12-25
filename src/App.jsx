import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  

  return (
    <center className='calculator'>
        
        <Display/>
        <Buttons/>
    </center>
  )
}

export default App
