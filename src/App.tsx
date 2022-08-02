import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import SummervalBCH from './past/SummervalBCH';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  useEffect(() => {
    AOS.init({duration: 500,once: true});
  },[]);



  return (
    <Wrapper>
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/2021-summer-val" element={<SummervalBCH/>} />
      </Routes>
      <Footer/>
    </Router>
    </Wrapper>
  );
}

export default App;

export const Wrapper = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
    justify-content: flex-start;
`
