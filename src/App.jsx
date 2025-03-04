import { useState } from 'react'
import './App.css'
import PrevisaoApp from './components/PrevisaoApp'
import WeatherInfo from './components/WeatherInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrevisaoApp/>
      
    </>
  )
}

export default App
