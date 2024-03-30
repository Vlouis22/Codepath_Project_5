import React from 'react'

export const Side = (props) => {
  return (
    <div className='side--component' onSubmit={props.searchData}>
        <h1>Your favorite weather app</h1>
        <form>
          <label htmlFor='city'></label>
          <input type='text' name='city' id='city' value={props.city} onChange={props.handleChange} placeholder="Enter city" required></input>
          <label htmlFor='state'></label>
          <input type='text' name='state' value={props.state} onChange={props.handleChange} placeholder="Enter state" required></input>
          <div className="radio--container">
            <input type="radio" id="daily" onChange={props.handleChange} name="weather" value={props.byDay}></input>
            <label htmlFor="daily">Daily</label>
            <input type="radio" id="hourly" onChange={props.handleChange} name="weather" value={props.byHour}></input>
            <label htmlFor="hourly">Hourly</label>
          </div>
          <input id='form--submit--button' type='submit'/>
        </form>
        
    </div>
  )
}
