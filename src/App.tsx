import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
