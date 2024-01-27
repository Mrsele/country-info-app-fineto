import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayCountry from './components/DisplayCountry';
import Footer from './components/Footer';
import DisplayAll from './components/DisplayAll';
import DisplayCountry2 from './components/DisplayCountry2';
//
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageBanner from './components/HomePageBanner';
import SearchBox from './components/SearchBox';
 import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
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
    <Route path="/country/:code" element={<DisplayCountry2 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  

  
  );
}

export default App;












































// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [countryName, setCountryName] = useState('');
//   const [countryData, setCountryData] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/countries/${countryName}`);
//       const data = await response.json();
      
//       // Check if data is not undefined or null before accessing properties
//       if (data && data.name && data.name.common) {
//         setCountryData(data);
//       } else {
//         console.error('Invalid or missing data:', data);
//         // Handle the case where data is missing or invalid
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Country Info App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter country name"
//           value={countryName}
//           onChange={(e) => setCountryName(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {countryData && (
//         <div>
//           <h2>{countryData.name.common}</h2>
//           <img src={countryData.flags.png} alt="Country Flag" />
//           <p>Capital: {countryData.capital}</p>
//           <p>Population: {countryData.population}</p>
//           <p>Languages: {Object.values(countryData.languages).join(', ')}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
