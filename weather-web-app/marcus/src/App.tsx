import { useEffect, useState } from 'react';

import BgStormy from './assets/bg-weather-stormy.png'
import BgCloudy from './assets/bg-weather-cloudy.png'
import './App.css'

function App() {
  const API_KEY = '636dee739d6b4abd94d213441252810'
  const FUTURE_DAYS = 6
  const [city, setCity] = useState('Manaus')
  const [data, setData] = useState<any | undefined>()

  async function fetchData() {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FUTURE_DAYS}&aqi=no&alerts=no`)

    console.log(await response.json())
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <main style={{ backgroundImage: `url(${BgCloudy})` }}>
      <div className="content">
        {/* first line */}
        <div className="general"></div>
        <div className="icon"></div>

        {/* second line */}
        <div className="indoor"></div>
        <div className="barometer"></div>
        <div className="moon-phase"></div>

        {/* third line */}
        <div className="forecast"></div>
        
        {/* multiline */}
        <div className="week-details"></div>
      </div>
    </main>
  )
}

export default App
