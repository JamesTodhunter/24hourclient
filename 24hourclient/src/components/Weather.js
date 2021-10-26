import React, {useState, useEffect} from 'react';
function Weather(props) {
  const [temp, setTemp] = useState(0);
  const [unit, setUnit] = useState('C');
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      const key = '8718301a21bfc7bd2a81111c28d5b520';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
      fetch(URL)
      .then(response => response.json())
       .then(response => {
           setTemp(response.main.temp)
       })
})}}
,[])
const switchUnit = unit === "C" ? "F" : "C";
const convertUnit = () => {
  if (unit === "C") {
    setTemp(((temp * 9/5) + 32).toFixed(0));
    setUnit(switchUnit);
  }
  if (unit === "F") {
    setTemp(((temp - 32) *  5/9).toFixed(0));
    setUnit(switchUnit);
  }
};
    return (
      <div id="app">
        <h1>Your Temperature!</h1>
        <button onClick={convertUnit}>Convert to °{switchUnit}</button>
        <span className="value">{(Math.round(temp))}°{unit}</span>
      </div>
    )
}
  export default Weather;