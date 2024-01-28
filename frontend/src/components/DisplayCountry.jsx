import React, { useEffect, useState } from 'react';
import './DisplayCountry.css';
import DisplayMap from './DisplayMap';
import { useParams } from 'react-router-dom';

const DisplayCountry = () => {
  const [country, setCountryData] = useState(null);
  const { countryName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setCountryData(null);

        const response = await fetch(`http://localhost:8000/api/countries/${countryName}`);
        if (!response.ok) {
          console.error('Error fetching data:', response.status);
          alert('No country found with the given name. Please enter a valid country name.');
          return;
        }

        const data = await response.json();

        if (data && data.name && data.name.common) {
          setCountryData(data);
        } else {
          console.error('Invalid country data:', data);
          // alert('No country found with the given name. Please enter a valid country name.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data. Please try again later.');
      }finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [countryName]);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {country && country.name && (
        <div>
            <section className="bg-white">
     <div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
          <div className="m-2 gap-4 p-2 grid grid-cols-[3fr,2fr]">
            <div className="">
              <h2 className="mb-2 text-xl font-semibold text-gray-900 ml-40">{country.name.common}:</h2>
              <ul className="max-w-full list-inside list-disc space-y-1 text-gray-500 text-left ml-40">
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
            <DisplayMap coordinates={country.latlng /*getCoordinates(country)*/} />
          </div>
          </div>
        </section>
          
        </div>

      )}
    </div>
  );
}

export default DisplayCountry;




