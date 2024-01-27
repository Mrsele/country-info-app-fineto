import React from 'react';
import './DisplayMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DisplayMap = ({ coordinates }) => {
  // Ensure that the coordinates object is not null or undefined
  if (!coordinates || !coordinates.latlng || coordinates.latlng.length !== 2) {
    console.error("Invalid coordinates object:", coordinates);
    return [0,0]; // Return early if coordinates are invalid
  }

  // Extract latitude and longitude from the coordinates object
  const [lat, lng] = coordinates.latlng;

  console.log("Latitude:", lat, "Longitude:", lng, "all", coordinates);

  return (
    <div>
      <figure className="max-w-full p-4">
        <figcaption className="m-2 text-left text-sm text-gray-500">From Map</figcaption>
        <MapContainer center={[lat, lng]} zoom={9} className="world-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Made with free'
          />
          <Marker position={[lat, lng]}>
            <Popup>A marker indicating this specific location.</Popup>
          </Marker>
        </MapContainer>
      </figure>
    </div>
  );
};

export default DisplayMap;



























// import React, { useState, useEffect } from 'react';
// import './DisplayMap.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// const DisplayMap = ({ coordinates }) => {
//   const lat = coordinates.latlng[0];
//   const lng = coordinates.latlng[1];
//   console.log(country);
//     // Ensure that the coordinates object is not null or undefined
//     if (!coordinates || typeof coordinates.lat === 'undefined' || typeof coordinates.lng === 'undefined') {
//       console.error("Invalid coordinates object:", coordinates);
//       return null; // Return early if coordinates are invalid
//     }
  
//     // Extract latitude and longitude from the coordinates object
//     const { lat, lng } = coordinates;
  
//     console.log("Latitude:", lat, "Longitude:", lng, "all", coordinates);
  
//     return (
     
//     <div>
//     <figure className="max-w-full p-4">
//         <figcaption className="m-2 text-left text-sm text-gray-500 ">From Map</figcaption>
//         <MapContainer center={[lat, lng]} zoom={9} className="world-map">
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='Made with free'
//       />
//       <Marker position={coordinates}>
//         <Popup>
//           A marker indicating this specific location.
//         </Popup>
//       </Marker>
//     </MapContainer>
//     </figure>
// </div>

//     );
//   };
  
//   export default DisplayMap;
  













// // // import React from 'react'
// // // import './DisplayMap.css'
// // // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// // // const DisplayMap = (coordinates ) => {
     
// // //   return (
// // //     <MapContainer
// // //     center={coordinates}
// // //     zoom={4}
// // //     style={{ width: '100%', height: '150px' }}
// // //   >
// // //     <TileLayer
// // //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // //     />
// // //     <Marker position={coordinates}>
// // //       <Popup>Country Location</Popup>
// // //     </Marker>
// // //   </MapContainer>
// // //   )
// // // }

// // // export default DisplayMap