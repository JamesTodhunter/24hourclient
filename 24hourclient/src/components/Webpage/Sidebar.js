import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home';
// import 
// import 
// import

const Sidebar = (props) => {
    return (
        <div>
            <div classname="sidepop">
                <ul className="popside">
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/Nasa">Nasa</Link></li>
                    <li><Link to="/Weather">Weather</Link></li>
                    <li><Link to="/Ticketmaster">Ticket master</Link></li> */}
                </ul>
            </div>
            <div className="route66">
                <Switch>
                    {/* <Route exact path="/home"><Home /></Route>
                    <Route exact path="/Nasa"><Nasa /></Route>
                    <Route exact path="/Weather"><Weather /></Route>
                    <Route exact path="/Ticketmaster"><TicketMaster /></Route> */}
                </Switch>
            </div>

        </div >
    )
}
update 2
export default Sidebar;