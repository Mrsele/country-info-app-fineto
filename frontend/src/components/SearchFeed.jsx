import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { countryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching feed Data from Backend 
      
        const response = await fetch(`http://localhost:8000/api/feedcountries/${countryName}`);
        console.log("Responses Here ",response);
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
  }, [countryName]);

  console.log(countries);
 
  if (loading) {
    return <div className='h-64 ml-80 mt-40'> Loading...</div>;
  }
  
  if (error) {
    return <div className='h-64 ml-80 mt-40'> Error</div>;
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
}

export default SearchFeed;


