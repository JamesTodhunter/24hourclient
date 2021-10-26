import React, { useState, useEffect} from 'react';
const Nasa = (props) => {
  const [NASAImg, setNASAImg] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);
  const latlon = lat + lon;
function getNASAImg() {
  const URL = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2020-02-01&api_key=y4xQkSwBaU3vFiHj73Ue3EOHcdcRXCzoglUBqy8f`;
  fetch(URL).then((res) => setNASAImg(res.url));
}
useEffect(() => {
  if (lat&&lon) {
    getNASAImg();
  }
}, [lat,lon]);
const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Getting Location...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log(latlon);
      },
      () => {
        setStatus('Unable to get location!');
      }
    );
  }
};
return(
  <div id="app">
    <h1>Nasa Satellite Image</h1>
      <button onClick={getLocation}>Get Location</button>
      <br />
      <img style={{height: 190, width: 190}} src={NASAImg} />
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>longitude: {lon}</p>}
  </div>
);
};
export default Nasa;