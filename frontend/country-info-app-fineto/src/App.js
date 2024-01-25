import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayCountry from './components/DisplayCountry';
import Footer from './components/Footer';
import DisplayAll from './components/DisplayAll';
//
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';


//
function App() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  const handleSearch = async (e) => {
    // e.preventDefault(); 
       try {
      const response = await fetch(`http://localhost:8000/api/countries/${countryName}`);
      const data = await response.json();
      console.log(data);
       if (data && data.name && data.name.common) {
        setCountryData(data);
      } else {
        console.error('Invalid or missing data:', data);
       }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  //
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  //
  return (
    <div className="App">
    <Header/>
    <br/> <br/>
    <br/> <br/>
    <div className='container-main'>
     
      <div className='searchContainer '>
   

        <input
          type="text"
          className='searchInput'
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          onKeyDown={handleKeyPress} 
        required />
        <button className='searchButton' onClick={handleSearch} >Search</button>
      </div> 
      </div><br/> <br/>
    {countryData &&  countryData.name && <DisplayCountry country={countryData}/>}
    
    <BrowserRouter>
    <Routes>
      <Route path="/coutries" element={<DisplayAll />} />
    </Routes>
  </BrowserRouter>

      <Footer/>
    </div>
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
