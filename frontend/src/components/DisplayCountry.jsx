import React from 'react';
import './DisplayCountry.css';
import DisplayMap from './DisplayMap';

const DisplayCountry = (props) => {
    const { country } = props;

    // Function to get coordinates

    function getCoordinates(countryco) {
      const latlng = countryco?.latlng;
  
      if (latlng) {
          if (Array.isArray(latlng) && latlng.length >= 2) {
              // Using array destructuring for clarity
              const [lat, lng] = latlng;
              return [lat, lng];
          } else if (typeof latlng === 'object' && latlng.lat && latlng.lng) {
              // Using destructuring for clarity
              const { lat, lng } = latlng;
              return [lat, lng];
          }
      }
  
      // Provide a comment explaining the choice of [0, 0] as fallback
      console.log("Using fallback coordinates: [0, 0]");
      return [0, 0];
  }
  




    // function getCoordinates(countryco) {
    //     const latlng = countryco?.latlng;

    //     if (latlng) {
    //         if (Array.isArray(latlng) && latlng.length >= 2) {
    //             return [latlng[0], latlng[1]];
    //         } else if (typeof latlng === 'object' && latlng.lat && latlng.lng) {
    //             return [latlng.lat, latlng.lng];
    //         }
    //     }

    //     console.log("Using fallback coordinates: [0, 0]");
    //     return [0, 0];
    // }

    const sampleCoordinates = { lat: 12.505, lng: -0.12 };

    return (
      <div>
      <div className='countryContainer'>
          <div className='flag-and-name'>
          <h1 className='country-name'>  {country.name.common}</h1>
              <img className='countryContainer-main-img' src={country.flags && country.flags.png} alt="Country Flag" />
              
          </div>
          <div className='country-info'>
  <table width={'100%'}>
    <tbody>
      <tr>
        <th>Capital</th>
        <td>{country.capital}</td>
      </tr>
      <tr>
        <th>Languages</th>
        <td>{Object.values(country.languages).join(', ')}</td>
      </tr>
      <tr>
        <th>Population</th>
        <td>{Intl.NumberFormat('en-US').format(country.population)}</td>
      </tr>
      <tr>
        <th>Continent</th>
        <td>{country.continents}</td>
      </tr>
      <tr>
        <th>Area(km²)</th>
        <td>{country.area}</td>
      </tr>
      <tr>
        <th>Time Zone</th>
        <td>{country.timezones[0]}</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
      <div className="hero-landing-page">
      <DisplayMap coordinates={ getCoordinates(country)}/>
  </div>
  </div>
    );
}

export default DisplayCountry;































// import React from 'react'
// import './DisplayCountry.css'
// import DisplayMap from './DisplayMap';




// const DisplayCountry = (props) => {
   
//     const {country} =props;
//     //fun for get lang and lattde 

//     function getCoordinates(countryco) {
//       const latlng = countryco?.latlng;
    
//       console.log("Latlng Property:", latlng);
    
//       if (latlng) {
//         if (Array.isArray(latlng) && latlng.length >= 2) {
//           return [latlng[0], latlng[1]];
//         } else if (typeof latlng === 'object' && latlng.lat && latlng.lng) {
//           return [latlng.lat, latlng.lng];
//         }
//       }
    
//       console.log("Using fallback coordinates: [0, 0]");
//       return [0, 0];
//     }
    
//     const sampleCoordinates = { lat: 51.505, lng: -0.09 };
//   return (
   
//     <div>
//     <div className='countryContainer'>
//   <div className='flag-img'>
//   <img className='countryContainer-main-img' src={country.flags && country.flags.png} alt="Country Flag"/>
//   </div>
//   <h2>Country name : {country.name.common}</h2>
//    <p>Capital: {country.capital}</p>
//   <p>Languages: {Object.values(country.languages).join(', ')}</p>
//   <p>Population: {Intl.NumberFormat('en-US').format(country.population)}</p> 
//    {console.log(country.landlocked)}
//   <p>Continent: {country.continents }</p>
//   <p>Area {country.area}</p>
//   <p>Time Zone{country.timezones[0]}</p>

 
//     </div>
//     </div>

   
   
//     )
// }

// export default DisplayCountry

