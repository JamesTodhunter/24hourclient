import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Header from './components/Webpage/Header';
// import Footer from './components/Webpage/Footer';
// import Sidebar from './components/Webpage/Sidebar';
import Ticketmaster from './components/Ticketmaster';
import Weather from './components/Weather';
import Nasa from './components/Nasa';





function App() {
  return (
    <div>
      {/* <Header />
      <Footer />
      <Sidebar /> */}
      <Ticketmaster/>
      <Weather/>
      <Nasa/>

    </div>
  )
}

export default App;

