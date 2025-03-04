import React from 'react'
import './WeatherInfo.css'

const WeatherInfo = ({weather}) => {

    

  return (
    <div className='containerWeather'>
        <h1>{weather.name}</h1>
        <div className='weathersInfo'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
        <p>{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className='description'>{weather.weather[0].description}</p>
        <div className='subInfos'>
            <p>Sensacao Termica:{Math.round(weather.main.feels_like)}</p>
            <p>Umidade do Ar:{weather.main.humidity}%</p>
            <p>Velocidade do Vento:{weather.wind.speed}Km/h</p>
        </div> 
    </div>
  )
}

export default WeatherInfo