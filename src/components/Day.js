import React from 'react'
import getCondition from './weatherConditions'

export const Day = ({ high, low, description, date }) => {

    let image = getCondition(description)
    let day = new Date(date).getDay()
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    return (
        <div className='single--day'>
            <h3>{days[day]}</h3>
            <img width={50} height={50} src={image}></img>
            <h4>{high} F / {low} F</h4>
        </div>
    )
}
