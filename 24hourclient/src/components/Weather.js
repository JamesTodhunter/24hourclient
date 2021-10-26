import React, { useState, useEffect } from 'react'

const WeatherApp = ({lat, lon}) => {
    const [temp, setTemp] = useState()
    const [weatherDescription, setWeatherDescription] = useState("")
    const [location, setLocation] = useState("")
    const [Lat, setLat] = useState(lat)
    const [Lon, setLon] = useState(lon)

    useEffect(() => {
        
        const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + Lat + '&lon=' + Lon + '&appid=eae82edb29f893b2de779e351325ef24'

        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                console.log(lat , lon);
                console.log(json , json?.weather[0]?.description , json.main.temp)
                setWeatherDescription(json.weather[0].description)
                setTemp(json.main.temp)
                setLocation(json.name)
            })
            .catch(() => console.error("Failed to get Weather Data API Fetch Failed"))
    },[Lat, Lon])
    useEffect(() => {
        setLat(lat)
        setLon(lon)
    })


    let fahrenheit = [Math.round(((parseFloat(temp)-273.15)*1.8)+32)] + '\xB0'

    if( weatherDescription.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( weatherDescription.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( weatherDescription.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }
        
    return (
        <div className="main">
            {weatherDescription}
            <br />
            <div id='temp'>
                {fahrenheit}
            </div>
            {location}
        </div>
    )

}

export default WeatherApp