import React, { use } from 'react'
import "./PrevisaoApp.css"
import { useState , useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import WeatherInfo5Days from './WeatherInfo5Days'

const PrevisaoApp = () => {

    const [weather , setWeather] = useState();
    const [prevWeather , setPrevWeather] = useState();
    const inputRef = useRef();


    async function searchCity(){
     const city = inputRef.current.value
     const key = "d21d4ba2206e7b89aeebda226f61fa98"
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
     const previsionUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
     

     const previsionApi = await axios.get(previsionUrl);
     setPrevWeather(previsionApi.data)

     const weatherData = await axios.get(url);
     setWeather(weatherData.data)
     console.log(weatherData.data)
    }


  return (
    <>
    <div className='container'>
        <h1 className="title">Previsao do Tempo</h1>
            <input ref={inputRef} type="text" className="inputField" placeholder='Digite o nome da sua cidade' />
            <button className="submitBtn" onClick={searchCity}>Buscar</button>
    </div>
    {weather && <WeatherInfo weather={weather}/>}
    {prevWeather && <WeatherInfo5Days prevWeather={prevWeather}/>}
    </>
  )
}

export default PrevisaoApp