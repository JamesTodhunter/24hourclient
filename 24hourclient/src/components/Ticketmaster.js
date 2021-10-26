import React, {useState, useEffect} from 'react'


const TicketMaster = ({lat, lon}) => {
    const [events, setEvents] = useState([])
    const [Lat, setLat] = useState(lat | 39.78)
    const [Lon, setLon] = useState(lon | -86.30)
    const Geohash = 'dp4dp'

    useEffect(() => {

        const URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=EHnbpJwE9fhM1FdYk7kY9JpQi0I1MG0h${Geohash}`

        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(json => {

                let myArr = json.page.map(page => {
                    return {
                        page: page.page,

                    }
                })
            }) 
            .catch(() => console.error("Failed to get TicketMaster API Fetch Failed"))

    }, [])

    return (
        <div className='main'>
            <ul 
            id='event-name'>
            </ul>
            <br />
        </div>
    )
}

export default TicketMaster
