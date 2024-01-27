import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayCountry from './components/DisplayCountry';
import Footer from './components/Footer';
import DisplayAll from './components/DisplayAll';

//
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageBanner from './components/HomePageBanner';
// import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';


//
function App() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const handleSearch = async () => {
    try {
      // Reset countryData and any previous errors
      setCountryData(null);
  
      // Basic validation for empty input
      if (!countryName.trim()) {
        alert('Please enter the name of the country.');
        return;
      }
  
      // Advanced validation for invalid characters and numbers
      if (/[^a-zA-Z\s]/.test(countryName)) {
        alert('Invalid characters or numbers in the country name. Please enter a valid country name.');
        return;
      }
  
      const response = await fetch(`http://localhost:8000/api/countries/${countryName}`);
      const data = await response.json();
  
      if (data && data.name && data.name.common) {
        // Valid country data found
        setCountryData(data);
      } else {
        // No valid country data found
        alert('No country found with the given name. Please enter a valid country name.');
      }
    } catch (error) {
      // Handle server errors
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data. Please try again later.');
    }
  };
  
  
  // i want to add Event listner for Enter 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  //
  return (
    <div className="App">
    <Header/>
      
<section className="bg-white">
<div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900">Finanto Country Info </h2>

    
    <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg className="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z" />
                </svg>
            </div>
            <input type="text" id="voice-search"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            onKeyDown={handleKeyPress}

                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search By Name of the Country.." required />
        </div>

        <button type="submit"
        onClick={(e) => {
          e.preventDefault();  
          handleSearch();
        }}
            className="ms-2 inline-flex items-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg className="me-2 h-4 w-4" aria-hidden="true"  fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>Search
        </button>
    </form>


    {countryData &&  countryData.name && <DisplayCountry country={countryData}/>}
   
    <BrowserRouter>
    <Routes>
      <Route path="/coutries" element={<DisplayAll />} />
    </Routes>
   </BrowserRouter>

 
    {!countryData &&  <div>
        <figure className="max-w-full p-4">
            <figcaption className="m-2 text-left text-sm text-gray-500 ">From Map of The World</figcaption>
            <HomePageBanner/>
        </figure>
    </div>}

</div>
</section>

  
  
  
  
  
  
  
  
  
  
  
  
  
  {/** Design of new added design *************************************************** */}
  
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
