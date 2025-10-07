import { useEffect, useState } from 'react'
import { getWeather } from '../api/getWeather'


export default function useWeather(initialCity = 'Allendale'){
    const [city, setCity] = useState(initialCity)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        async function fetchData(){
            const data = await getWeather(city)
            setWeather(data)
        }
        fetchData()
    }, [city])

    return { weather, setCity }
}