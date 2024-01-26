import React from 'react'
import './DisplayCountry.css'
import DisplayMap from './DisplayMap';

// const DisplayCountry = () => {
//   return (
//     <div>DisplayCountry</div>
//   )
// }

// export default DisplayCountry




// import React,{useContext} from 'react'
 



const DisplayCountry = (props) => {
   
    const {country} =props;
    //fun for get lang and lattde 

    function getCoordinates(countryco) {
      const latlng = countryco?.latlng;
    
      console.log("Latlng Property:", latlng);
    
      if (latlng) {
        if (Array.isArray(latlng) && latlng.length >= 2) {
          return [latlng[0], latlng[1]];
        } else if (typeof latlng === 'object' && latlng.lat && latlng.lng) {
          return [latlng.lat, latlng.lng];
        }
      }
    
      console.log("Using fallback coordinates: [0, 0]");
      return [0, 0];
    }
    
    const sampleCoordinates = { lat: 51.505, lng: -0.09 };
  return (
    <div>
    <div>
    <div className='countryContainer'>
    <div className='countryContainer-left'>
  <div className='flag-img'>
  <img className='countryContainer-main-img' src={country.flags && country.flags.png} alt="Country Flag"/>
  </div>
  </div>
  <div className='countryContainer-right'>
  <h2>Country name : {country.name.common}</h2>
  <div className='coutry-capitalcity'>  <p>Capital: {country.capital}</p></div>
  <p>Languages: {Object.values(country.languages).join(', ')}</p>
  <p>Population: {Intl.NumberFormat('en-US').format(country.population)}</p> 
   {console.log(country.landlocked)}
  <p>Continent: {country.continents }</p>
  <p>Area {country.area}</p>
  <p>Time Zone{country.timezones[0]}</p>

</div>


    </div>
{/* the bewlow code is for displaying Map  */}

    </div>
    
{/**end  map */}
    </div>
   
    )
}

export default DisplayCountry

