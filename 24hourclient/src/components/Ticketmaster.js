import React, {useState, useEffect} from 'react';


const Ticketmaster = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [status, setStatus] = useState(null);
    const [eventList, setEventList] = useState([]);
    
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation not available by your browser');
        } else {
            setStatus('...Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    useEffect(() => {

    const URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=EHnbpJwE9fhM1FdYk7kY9JpQi0I1MG0h&latlong='+`${lat},${lon}`

    if (lat && lon ){
        fetch(URL)
        .then(response => response.json())
        .then(data => setEventList(data._embedded.events));
      }
    }, [lat, lon]);

    return(
        <div id="app">
            <h1>TicketMaster</h1>
            <button onClick={getLocation}>Events Near You</button>
            <p>{status}</p>
            <br />
            <div>
               {eventList.map(event => <div><h2>{event.name}</h2></div>)}   
            </div>
        </div> 
    );
}

export default Ticketmaster;