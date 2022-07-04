import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import { locationIcon } from '../assets';

import '../stylesheets/map.scss';

const Map = ({ coordinates, className }) => {
  const [map, setMap] = useState();

  const latLng = L.latLng(coordinates.lat, coordinates.lng);

  // Prevent default marker styles
  const icon = L.icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 50],
    className: 'map-container__icon'
  });

  useEffect(() => {
    if (map)
      map.flyTo([coordinates.lat, coordinates.lng], 16, {
        animate: true,
        duration: 1.5
      });
  }, [map, coordinates]);

  return (
    <div className="map-container">
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={latLng}
        zoomControl={false}
        zoom={13}
        whenCreated={map => setMap(map)}
        className={className}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={latLng} />
      </MapContainer>
    </div>
  );
};

export default Map;
