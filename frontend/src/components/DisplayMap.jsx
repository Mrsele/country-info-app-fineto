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
{/** For displaying a map  */}
      <figure className="max-w-full p-2">
        <figcaption className="m-2 text-left text-sm text-gray-500">Geographical Location(Map):</figcaption>
        <MapContainer center={[lat, lng]} zoom={5} className="world-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Fineto'
          />
          <Marker position={[lat, lng]}>
            <Popup>This is the Country You /searched .</Popup>
          </Marker>
        </MapContainer>
      </figure>
    </div>
  );
};

export default DisplayMap;

