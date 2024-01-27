import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DisplayMap from './DisplayMap';

const DisplayCountry2 = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Fetch country data from your backend using the provided country code
    fetch(`http://localhost:8000/api/countries/${code}`)
      .then(response => response.json())
      .then(data => setCountry(data))
      .catch(error => console.error('Error fetching country data:', error));
  }, [code]); // Trigger useEffect whenever the code changes

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

  return (
    <section className="bg-white">
     <div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
    <div className="m-2 gap-4 p-2 grid grid-cols-[3fr,2fr]">
      {country && (
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
      )}

      {country && (
        <div className="">
          <figure className="max-w-lg">
            <img className="h-auto max-w-full rounded-lg" src={country.flags && country.flags.png} alt="Country Flag" />
            <figcaption className="mt-2 text-center text-sm text-gray-500 ">Flag of {country.name.common}</figcaption>
          </figure>
        </div>
      )}

      {/* DisplayMap component */}
      {country && (
        <div className="hero-landing-page">
          <DisplayMap coordinates={getCoordinates(country) /* or country.latlng */} />
        </div>
      )}

    </div>
    </div>
        </section>
  );
}

export default DisplayCountry2;





















