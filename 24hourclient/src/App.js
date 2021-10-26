import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TicketMaster from './components/Ticketmaster';



const App = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);

  localStorage.setItem('longitude', lon);
  localStorage.setItem('latitude', lat)

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


// import Header from './components/site/Header'
// import Footer from './components/site/Footer'
// import Sidebar from './components/site/Sidebar'
import Nasa from './components/Nasa'

// import {
//   BrowserRouter as Router,
// } from 'react-router-dom';

function App() {
  return(
    <div>
      <Nasa />
      {/* <Header />
      <Sidebar />  */}
      {/* <Router /> */}
      {/* <Footer /> */}

  return (
    <div className="App">

      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>Longitude: {lon}</p>}
      <TicketMaster lat={lat} lon={lon}/>

      <h1>Hello!</h1>

    </div>
  );

}

export default App;
