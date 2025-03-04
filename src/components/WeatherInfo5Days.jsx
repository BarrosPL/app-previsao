import React from 'react'
import './WeatherInfo5Days.css'

const WeatherInfo5Days = ({prevWeather}) => {

 let dailyForecast = {}   

 for(let forecast of prevWeather.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if(!dailyForecast[date]){
        dailyForecast[date] = forecast

    }
 }

 const proxDias = Object.values(dailyForecast).slice(1,6)

 function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', {weekday:'long', day:'2-digit'})

    return newDate
 }
  return (
    <div className='containerWeather'>
        <h2>Previsao Proximos 5 Dias</h2>
        <div className='weatherList'>
             {proxDias.map(forecast =>(
                <div key={forecast.dt} className='weatherItem'>
                 <p>{convertDate(forecast)}</p>
                 <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
                 <p>{forecast.weather[0].description}</p>
                 <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                </div>
        ))}
        </div>
        
    </div>
  )
}

export default WeatherInfo5Days