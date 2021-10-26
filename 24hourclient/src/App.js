import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nasa from './Components/Nasa';
import Weather from './Components/Weather'

const App = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);

  localStorage.setItem('latitude', lat)
  localStorage.setItem('longitude', lon)


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  // localStorage.setItem({getLocation})



  return (
    <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>Longitude: {lon}</p>}
      <Nasa lat={lat} lon={lon}/>
      <Weather lat={lat} lon={lon}
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
