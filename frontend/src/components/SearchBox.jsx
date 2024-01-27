import React, { useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [countryName, setCountryName] = useState('');
  const navigate= useNavigate();
  const handleSubmit = async () => {
       
  
      // Basic validation for empty input
      if (!countryName.trim()) {
        alert('Please enter the name of the country.');
        return;
      }
  
      // Advanced validation for invalid characters and numbers
      if (/[^a-zA-Z\s]/.test(countryName)) {
        alert('Invalid characters or numbers in the country name. Please enter a valid country name.');
        return;
      }
  if(countryName){
    navigate(`/search/${countryName}`);
  }
     
  };
  
  
  // i want to add Event listner for Enter 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    
<section className="bg-white">
<div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900">Fineto World Country Info Apps </h2>

    
    <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg className="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z" />
                </svg>
            </div>
            <input type="text" id="voice-search"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            onKeyDown={handleKeyPress}

                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search By Name of the Country.." required />
        </div>

        <button type="submit"
        onClick={(e) => {
          e.preventDefault();  
          handleSubmit();
        }}
            className="ms-2 inline-flex items-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg className="me-2 h-4 w-4" aria-hidden="true"  fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>Search
        </button>
    </form>  

</div>
</section>
  )
}

export default SearchBox