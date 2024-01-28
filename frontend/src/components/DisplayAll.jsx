import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DisplayAll.css';

const DisplayAll = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const filter ="all";

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      // const response = await fetch('http://localhost:8000/api/countries');
      if (!response.ok) {
        throw new Error(`Failed to fetch countries: ${response.status}`);
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
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
      </div>
    </section>
  );
};

export default DisplayAll;


