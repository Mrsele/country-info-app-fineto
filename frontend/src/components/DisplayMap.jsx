import React from 'react';
import './DisplayMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DisplayMap = ({ coordinates }) => {
  if (!coordinates || coordinates.length !== 2 || typeof coordinates[0] !== 'number' || typeof coordinates[1] !== 'number') {
    console.error("Invalid coordinates:", coordinates);
    return null;
  }

  const [lat, lng] = coordinates;

  return (
    <div>
      <figure className="max-w-full p-4">
        <figcaption className="m-2 text-left text-sm text-gray-500">From Map</figcaption>
        <MapContainer center={[lat, lng]} zoom={5} className="world-map">
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

