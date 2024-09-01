import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onCreate }) => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled out
    if (!category || !location || !status || !details) {
      setError("All fields are required.");
      return;
    }

    const eventData = { category, location, status, details };
    console.log("Event Data to be sent:", eventData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/events/', eventData);
      console.log("Response from backend:", response.data);

      onCreate(response.data);

      setCategory('');
      setLocation('');
      setStatus('');
      setDetails('');
      setError('');  // Clear any previous errors
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError("Failed to submit event. Please try again.");
      } else {
        console.error("Error sending data to backend:", error.message);
        setError("Failed to submit event. Please check your network connection.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Create New Event</h2>
      
      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.formGroup}>
        <label style={styles.label}>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Details:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          style={styles.textarea}
          required
        />
      </div>

      <button type="submit" style={styles.button}>Create Event</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  }
};

export default EventForm;
