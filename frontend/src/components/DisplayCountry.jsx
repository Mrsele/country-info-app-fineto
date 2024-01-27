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
     
{/** new  */}


<div className="m-2  gap-4 p-2 grid grid-cols-[3fr,2fr]">
       
<div className="">
    <h2 className="mb-2 text-lg font-semibold text-gray-900"> {country.name.common}:</h2>
    <ul className="max-w-full list-inside list-disc space-y-1 text-gray-500 text-left ml-60 ">
        <li><span className="font-bold">Capital:</span> {country.capital}</li>
        <li><span className="font-bold">Languages:</span>{Object.values(country.languages).join(', ')}</li>
        <li><span className="font-bold">Population:</span>{Intl.NumberFormat('en-US').format(country.population)}</li>
        <li><span className="font-bold">Continent:</span>{country.continents}</li>
        <li><span className="font-bold">Area(Km²):</span> {country.area}</li>
        <li><span className="font-bold">Time Zone:</span> {country.timezones[0]}</li>
    </ul>
</div>


<div className="">
    <figure className="max-w-lg">
        <img className="h-auto max-w-full rounded-lg" src={country.flags && country.flags.png} alt="Country Flag"
            />
        <figcaption className="mt-2 text-center text-sm text-gray-500 ">Flag of {country.name.common}</figcaption>
    </figure>
</div>
</div>



{/** new end */}

      <div className="hero-landing-page">
      <DisplayMap coordinates={country.latlng /*getCoordinates(country)*/}/>
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

