import React from 'react'
import { Day } from './Day';
import getCondition from './weatherConditions'




export const HourlyWeather = (props) => {

    let image = getCondition(props.data.weather[0].weather.description);

  return (
    
    <main className='main--component purple'>
        <div className='main--component--outer'>
            <h3>{props.data.city}, {props.data.state}, {props.data.country} </h3>
            <div className='main--component--center'>
                <div>
                    <img width={80} height={80} src={image}></img>
                    <h3>{props.data.weather[0].weather.description}</h3>
                </div>
                <h1>{props.data.weather[0].temp}°F</h1>
                <div>
                    <h4>Wind: {props.data.weather[0].wind_spd}mph</h4>
                    <h4>Precip: {props.data.weather[0].precip} in/hr</h4>
                    <h4>Pressure: {props.data.weather[0].pres}mb</h4>
                </div>
            </div>
            <div className='day--container'>
                {
                    props.data.weather.map((day, index)=>{
                        return <Day key={`day_${index}`}
                                high={day.max_temp} 
                                low={day.min_temp} 
                                description={day.weather.description}
                                date={day.valid_date}/>
                    })
                }
                </div>
        </div>
    </main>
  )
}
