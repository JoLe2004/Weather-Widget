import { useEffect, useState } from 'react'
import { getWeather } from './api/getWeather'
import Display from './components/Display'

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await getWeather("Allendale")
      setWeather(data)
    }
    fetchData()
  }, [])

  if (!weather) {
    return <p>Loading weather...</p>; // ✅ Loading state
  }

  return (
    <div className="bg-[url(./img/weather-widget-bg.png)] bg-center bg-cover h-screen flex p-4">
      <Display data={weather} />
      
    </div>
  )
}

export default App
