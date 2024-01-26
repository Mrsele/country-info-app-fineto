import { Link } from 'react-router-dom';
import  { React,useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './DisplayAll.css'
const DisplayAll = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
          
        .then(data => setCountries(data))
        .catch(error => console.error('Error fetching countries:', error));
    }, []);

  return (
    <div className="country-grid">
      {countries.map(country => (
        <Link to={`/country/${country.cca2}`} key={country.cca2}>
          <div className="country-card">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default DisplayAll