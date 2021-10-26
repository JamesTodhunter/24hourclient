import React, { useState, useEffect } from "react";


const Nasa = ({ lat, lon }) => {

    const key = "49Wtu9aKiDGK1hhVCS1UmurRddpM3W7tTBrUq97U"


    const [Lat, setLat] = useState(lat | 39.6591104);
    const [Lon, setLon] = useState(lon | -105.005056);


    const [imgSrc, setImgSrc] = useState();

    let imgStyles = {
        height: "350px",
        width: "350px",
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
            <img style={imgStyles} src={imgSrc} alt="" />
        </div>
    )
}

export default Nasa;