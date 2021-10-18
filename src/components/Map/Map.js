import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { locationIcon } from '../../assets/index';
import './Map.scss';

const DisplayMap = ({ coordinates }) => {
  const [map, setMap] = useState();

  useEffect(() => {
    if (map)
      map.flyTo([coordinates.lat, coordinates.lng], 17, {
        animate: true,
        duration: 2
      });
  }, [map, coordinates]);

  const icon = L.icon({
      iconUrl: locationIcon,
      iconRetinaUrl: locationIcon,
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: [40, 50],
      className: 'mapcontainer__icon'
    }),
    latLng = L.latLng(coordinates.lat, coordinates.lng);

  return (
    <div className="mapcontainer">
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={latLng}
        zoomControl={false}
        zoom={13}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={latLng}></Marker>
      </MapContainer>
    </div>
  );
};

export default DisplayMap;
