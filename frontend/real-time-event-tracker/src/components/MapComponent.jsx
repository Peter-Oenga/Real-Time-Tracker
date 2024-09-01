import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ events }) => {
  return (
    <MapContainer center={[0.0236, 37.9062]} zoom={6} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {events.map((event, index) => (
        <Marker key={index} position={[event.latitude, event.longitude]}>
          <Popup>
            <strong>{event.category}</strong><br />
            {event.location}<br />
            {event.details}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
