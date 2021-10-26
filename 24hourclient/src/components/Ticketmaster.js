import React, { useState, useEffect } from 'react'

const TicketApp = ({lat, lon}) => {
    const [events, setEvents] = useState([])
    const [Lat, setLat] = useState(lat | 39.78)
    const [Lon, setLon] = useState(lon | -86.30)

    useEffect(() => {

        const URL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=GAQ4QhP66hwCBAUcwn0aHX2GiiJ8YGQi"

        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(json => {

                let myArr = json.page.map(page => { // Make a new array reducing the items
                    return {
                        page: page.page,

                    }
                })
        
                console.log(myArr)
                console.log(json)
                console.log(json.page)
                console.log(json._embedded.events)


            }) 
            .catch(() => console.error("Failed to get TicketMaster API Fetch Failed"))

    }, [])

    return (
        <div className='main'>
            <ul id='event-name'>
            </ul>
            <br />

        </div>
    )

}

export default TicketApp