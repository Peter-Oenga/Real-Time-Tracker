import React, { useState } from 'react';

const EventForm = ({ onCreate }) => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { category, location, status, details };

    if (typeof onCreate === 'function') {
      onCreate(eventData);
    } else {
      console.error('onCreate prop is not a function or is undefined');
    }

    // Clear form fields after submission
    setCategory('');
    setLocation('');
    setStatus('');
    setDetails('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div>
        <label>Details:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
