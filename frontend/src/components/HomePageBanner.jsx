import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './HomePageBanner.css'
 /////////////////////////////////////////////////////////

 import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";


const HomePageBanner = () => {
  

  return (
   

    <div>
    <figure className="max-w-full p-4">
      
        <MapContainer center={[0, 0]} zoom={2} className="world-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Made with free'
      />
    </MapContainer>
    </figure>
</div>
  );
};

export default HomePageBanner;
