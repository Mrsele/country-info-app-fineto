import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from '@sweetalert/with-react';
const SearchFeed = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { countryName } = useParams();
  // const MySwal = withReactContent(Swal);
  useEffect(() => {
    const fetchData = async () => {
      try {
   
        setCountries(null);
        setError(null);
        setLoading(true);
             // Fetching feed Data from Backend 
        const response = await fetch(`http://localhost:8000/api/feedcountries/${countryName}`);
        console.log("Responses Here ",response);
        if (!response.ok) {
          // throw new Error(`Failed to fetch countries: ${response.status}`);
          alert('No country found with the given name. Please enter a valid country name.');
       
        }

        const data = await response.json();
        // checking if therer a country named in the data
        if (data && data.length > 0) {
          setCountries(data);
        } else {
          setError('No countries found.');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No countries found!',
          });
        }
        // //
        // setCountries(data);
      } catch (error) {
        setError(error.message,"Connection Error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Connection Error to Server!',
        });
      
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [countryName]);

  console.log(countries);
 
  if (loading) {
    return <div className='h-64 ml-80 mt-60'> Loading...</div>;
  }
  
  if (error) {
    return <div className='h-64 ml-80 mt-80 text-red-500'> Something went wrong , try again or search another country</div>;
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


