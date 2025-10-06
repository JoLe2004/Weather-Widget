import { fetchWeatherApi } from 'openmeteo';

export async function getWeather(city){
    const geores = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
    if (!geores.ok) throw new Error('City not found')
    const geodata = await geores.json()

    const { latitude, longitude } = geodata.results[0]

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    if (!weatherRes.ok) throw new Error('Weather data not available')

    const weatherData = await weatherRes.json()
    return weatherData
 
}