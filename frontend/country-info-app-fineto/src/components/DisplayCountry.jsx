import React from 'react'
import './DisplayCountry.css'
// const DisplayCountry = () => {
//   return (
//     <div>DisplayCountry</div>
//   )
// }

// export default DisplayCountry




// import React,{useContext} from 'react'
 



const DisplayCountry = (props) => {
   
    const {country} =props;
  return (
    
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
  <p>Currency: {country.currencies && country.currencies[0] && country.currencies[0].name}</p>
   {console.log(country.landlocked)}
  <p>Dialing Code: {country.continents }</p>
  <p>Area {country.area}</p>
  <p>Landlocked: {country.landlocked}</p>
    <p>Time Zone{country.timezones[0]}</p>
{/* <div className='productdisplay-right-price-old'><p>Languages: {Object.values(country.languages).join(', ')}</p></div>
 */ }


 
</div>
    </div>
  
    )
}

export default DisplayCountry

