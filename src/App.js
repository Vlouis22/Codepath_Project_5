import './App.css';
import { Side } from './components/Side';
import { Main } from './components/Main';
import { HourlyWeather} from './components/HourlyWeather';

import { useEffect, useState } from 'react';
import {DATA} from './data'


const APIKEY = `${process.env.REACT_APP_API_KEY}`


function App() {

  const [data, setData] = useState();
  const [location, setLocation] = useState({city: '', state: '', byDay: true})
  const [search, setSearch] = useState(0);

  useEffect(() => {
    if(location.city === '' || location.state === ''){
      setData(DATA)
    }
    else{
    const byDayWeather = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.city},${location.state}&units=I&key=${APIKEY}`
    //const byHourlyWeather = `https://api.weatherbit.io/v2.0/forecast/minutely?city=Raleigh,NC&key=${APIKEY}&units=I`
    async function getData() {
      let response = await fetch(byDayWeather)
      if (response.ok) {
        let result = await response.json();
        console.log(result)
        setData(prev => ({ city: result.city_name, state: result.state_code, country: result.country_code, weather: result.data }))
      }
    }
    getData();
  }
  }, [search])

  function handleChange(e){
    e.preventDefault()
    if(e.target.name === "weather"){
      setLocation({...location, byDay: !location.byDay});
      console.log(location.byDay)
    }
    else{
      setLocation({...location, [e.target.name]: e.target.value});
    }
  }

  function searchData(e){
    e.preventDefault();
    setSearch(search+1);
  }

  return (
    <div className="weather--main">
      <Side handleChange={handleChange} location={location} searchData={searchData} byDay={location.byDay} byHour={!location.byDay}/>
      {data && <Main data={data} />}
    </div>
  );
}

export default App;
