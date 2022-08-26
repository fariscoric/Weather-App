import {useState} from 'react'
import React from 'react'
import './WeatherApp.css'


export default function WeatherApplication({description}) {
    const [celsius, setCelsius] = useState(0)
    function celsiusChange(){
        setCelsius(Math.floor(Math.random() * 60 ) - 20)
    }

    if (celsius > -10 && celsius <33) {
        description = 'Neutralno'
    } else if (celsius <= -10) {
        description = 'Smrzavanje'
    } else if (celsius >= 33) {
        description = 'Ne izlazite se suncu'
    }


    return (
        <div className='WeatherCard' style={{
            background: celsius > 23 ? 'orange' : celsius > 4 ? 'grey' : 'aqua',
        }}>
            {<h1 className='mainTemp'>{celsius}°</h1>}
            <button className='changeButton' onClick={celsiusChange}>Change temp</button>
            <h1 className='description'>{description}</h1>
        </div>
    )
}