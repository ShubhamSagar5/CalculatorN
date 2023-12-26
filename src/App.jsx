import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  
  const [calVal,setCalVal] = useState('')

  const onButtonClick = (btnText) => {
    // console.log(btnText)
    if(btnText === 'C'){
      setCalVal('')
    }else if(btnText === '='){
      const result = eval(calVal)
      setCalVal(result)
    }else{
      setCalVal(calVal + btnText)
    }
  }

  return (
    <center className='calculator'>
        
        <Display calVal={calVal}/>
        <Buttons onBtnClick={onButtonClick}/>
    </center>
  )
}

export default App
