import React, { useState, useEffect } from 'react';

const Nasa = ({ lat, lon }) => {
    // Additionally, add a button that toggles between Fahrenheit and Centigrade when pulling from the weather API.
    // Api Key
    const key = "49Wtu9aKiDGK1hhVCS1UmurRddpM3W7tTBrUq97U"
  
    // Props or default lat/lon
    const [Lat, setLat] = useState(lat | 11.78);
    const [Lon, setLon] = useState(lon | -23.3);
  
    // Dynamic url made in useEffect()
    const [imgSrc, setImgSrc] = useState();
  
    let imgStyles = {
      height:"150px",
      width:"150px",
    }
    
    useEffect(() => {
      let nasaURL = `https://api.nasa.gov/planetary/earth/imagery?api_key=${key}&lon=${Lon}&lat=${Lat}`;
  
      console.log(nasaURL)
      fetch(nasaURL)
        .then(res => res.blob())
        .then((imgBlob) => 
          setImgSrc(URL.createObjectURL(imgBlob))
        )
    }, [])
  
    return (
      <div className="main">
        <img style={imgStyles} src={imgSrc} alt='' />
      </div>
    )
  }
  
  export default Nasa;