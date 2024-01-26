
import React from 'react';
import './DisplayMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const DisplayMap = ({ coordinates }) => {
    // Ensure that the coordinates object is not null or undefined
    if (!coordinates || typeof coordinates.lat === 'undefined' || typeof coordinates.lng === 'undefined') {
      console.error("Invalid coordinates object:", coordinates);
      return null; // Return early if coordinates are invalid
    }
  
    // Extract latitude and longitude from the coordinates object
    const { lat, lng } = coordinates;
  
    console.log("Latitude:", lat, "Longitude:", lng, "all", coordinates);
  
    return (
        
      <MapContainer 
        center={[51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '60vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Country Location</Popup>
        </Marker>
      </MapContainer>
    
    );
  };
  
  export default DisplayMap;
  













// // import React from 'react'
// // import './DisplayMap.css'
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// // const DisplayMap = (coordinates ) => {
     
// //   return (
// //     <MapContainer
// //     center={coordinates}
// //     zoom={4}
// //     style={{ width: '100%', height: '150px' }}
// //   >
// //     <TileLayer
// //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //     />
// //     <Marker position={coordinates}>
// //       <Popup>Country Location</Popup>
// //     </Marker>
// //   </MapContainer>
// //   )
// // }

// // export default DisplayMap