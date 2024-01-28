import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayMap from './DisplayMap';
import './DisplayCountry.css';

const DisplayCountry2 = () => {
  const { countryCode } = useParams();
const [country, setCountryData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      setCountryData(null);
       const response = await fetch(`http://localhost:8000/api/country/${countryCode}`);
      //  const response = await fetch('https://restcountries.com/v3.1/all');

      if (!response.ok) {
        console.error('Error fetching data:', response.status);
        const errorMessage = await response.text(); // or response.json() depending on the error response format
        setError(errorMessage);
        return;
        
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0 && data[0].name && data[0].name.common) {
        setCountryData(data[0]);
      } else {
        console.error('Invalid country data:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Call the function within useEffect
  handleSearch();

  // Log countryCode here

}, [countryCode]);


  // Function to get coordinates
  function getCoordinates(countryco) {
    const latlng = countryco?.latlng;

    if (latlng) {
      if (Array.isArray(latlng) && latlng.length >= 2) {
        const [lat, lng] = latlng;
        return [lat, lng];
      } else if (typeof latlng === 'object' && latlng.lat && latlng.lng) {
        const { lat, lng } = latlng;
        return [lat, lng];
      }
    }

    console.log("Using fallback coordinates: [0, 0]");
    return [0, 0];
  }
  
  if (loading) {
    return <div className='ml-60'><h2>Loading...</h2></div>;
  }
  
  if (error) {
    return <div className="text-red-900 ml-60">Error: {error}</div>;
  }
 
  return (
    <section className="bg-white">
     <div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
    <div className="m-2 gap-4 p-2 grid grid-cols-[3fr,2fr]">
       
        <div className="">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 ml-60">{country.name.common}:</h2>
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
            <img className="h-auto max-w-full rounded-lg" src={country.flags && country.flags.png} alt="Country Flag" />
            <figcaption className="mt-2 text-center text-sm text-gray-500 ">Flag of {country.name.common}</figcaption>
          </figure>
        </div>
     

        </div>
         
       <div className="hero-landing-page">
       <DisplayMap coordinates={getCoordinates(country) /* or country.latlng */} />
  
     </div>
     

    
    </div>
        </section>
  );
}

export default DisplayCountry2;





















