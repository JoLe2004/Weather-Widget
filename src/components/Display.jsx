
export default function Display({data}){
    return (
        <>
        <div className="bg-[url(./img/display.png)] bg-cover w-48 h-48 rounded-full flex items-center justify-center font-pixeboy text-4xl">
            <p>{data.current_weather.temperature} F</p>
        </div>
        </>
    )
}