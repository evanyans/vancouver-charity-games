import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import SummervalBCH from './past/SummervalBCH';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/2021-summer-val" element={<SummervalBCH/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
