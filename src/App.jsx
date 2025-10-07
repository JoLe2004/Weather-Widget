import Display from './components/Display'
import SidePanel from './components/SidePanel'
import useWeather from './hooks/useWeather'

function App() {
  const {weather, setCity} = useWeather()

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div className="bg-[url(./img/weather-widget-bg.png)] bg-center bg-cover h-screen flex p-4">
      <Display data={weather} />
      <SidePanel data={weather} onCityChange={setCity}/>
    </div>
  )
}

export default App
