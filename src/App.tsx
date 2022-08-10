import React, { FC, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import SummervalBCH from './past/SummervalBCH';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Sponsor from './pages/Sponsor';
import HomeV2 from './pages/HomeV2';
import FallleagueRC from './past/FallleagueRC'
import WinterleagueFB from './past/WinterleagueFB';
const App: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  

  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/2021-summer-val" element={<SummervalBCH />} />
          <Route path="/2021-fall-league" element={<FallleagueRC />} />
          <Route path="/2021-winter-league" element={<WinterleagueFB />} />
        </Routes>
        <Footer />
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
