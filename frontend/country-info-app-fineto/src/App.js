import React, { useState } from 'react';
import './App.css';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();    try {
      const response = await fetch(`http://localhost:8000/api/countries/${countryName}`);
      const data = await response.json();
      console.log(data);
      // Check if data is not undefined or null before accessing properties
      if (data && data.name && data.name.common) {
        setCountryData(data);
      } else {
        console.error('Invalid or missing data:', data);
        // Handle the case where data is missing or invalid
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Country Info App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {countryData && countryData.name && (
        <div>
          <h2>{countryData.name.common}</h2>
          <img src={countryData.flags && countryData.flags.png} alt="Country Flag" />
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <p>Languages: {Object.values(countryData.languages).join(', ')}</p>
          <p>Currency: {countryData.currencies && countryData.currencies[0] && countryData.currencies[0].name}</p>
          <p>Dialing Code: {countryData.dialingCodes && countryData.dialingCodes[0]}</p>

           <p>Area </p>
           <p>Region </p>
           <p>Subregion </p>
           <p>Languages </p>
           <p>Currencies </p>
           <p> Timezones</p>
           <p>Borders </p>
           
          


        </div>
      )}
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
