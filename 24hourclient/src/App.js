import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Webpage/Header';
import Footer from './components/Webpage/Footer';
import Sidebar from './components/Webpage/Sidebar';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Sidebar />

    </div>
  )
}

export default App;