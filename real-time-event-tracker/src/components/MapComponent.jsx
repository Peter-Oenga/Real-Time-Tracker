// src/components/MapComponent.jsx
import React from 'react';

const MapComponent = ({ events = [] }) => {
  return (
    <div>
      <h2>Map</h2>
      {events.length === 0 ? (
        <p>No events to display</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MapComponent;
