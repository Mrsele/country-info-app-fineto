import React, { useState } from 'react';
// import './App.css';
import Header from './components/Header';
import DisplayCountry from './components/DisplayCountry';
import Footer from './components/Footer';
import DisplayAll from './components/DisplayAll';
import DisplayCountry2 from './components/DisplayCountry2';
import HomePageBanner from './components/HomePageBanner';
import SearchBox from './components/SearchBox';
 import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
// import './style/style.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <SearchBox/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search/:countryName" element={<DisplayCountry />} />
    <Route path="/about" element={<AboutMe />} />

    <Route path="/all-countries" element={<DisplayAll />} />
    <Route path="/country/:countryCode" element={<DisplayCountry2 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  

  
  );
}

export default App;

