import { useState } from 'react'
import { cn } from '../lib/utils'

export default function SidePanel({data, onCityChange}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    function handleSubmit() {
        if (inputValue.trim() !== ''){
            onCityChange(inputValue.trim())
        }
    }

    function handleKeyDown(e){
        if (e.key === "Enter"){
            handleSubmit()
        }
    }

    return (
        <>
        <div className="relative">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={cn("fixed top-1/2 right-0 -translate-y-1/2 transition-transform duration-300 p-2 z-1 bg-blue-400",
                            isMenuOpen ? "-translate-x-64" : "translate-x-0"
                )}>
                {"<"}
            </button>

            <div className={cn("fixed top-0 right-0 h-full w-64 p-4 bg-white transition-transform duration-300",
                            isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <input 
                    type='text' 
                    placeholder='Enter city'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className='p-2 m-4 border w-[calc(100%-2rem)]'>
                </input>
                
                <h1 className='flex gap-4'>Time: 
                    <p className='relative font-pixeboy top-[1px]'>{data.current_weather.time}</p>
                </h1>
                <h1 className='flex gap-4'>Temperature: 
                    <p className='relative font-pixeboy top-[1px]'>{data.current_weather.temperature}</p>
                </h1>
                <h1 className='flex gap-4'>Wind Speed: 
                    <p className='relative font-pixeboy top-[1px]'>{data.current_weather.windspeed}</p>
                </h1>
            </div>
        </div>
        </>
    )
}