import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import MapComponent from './components/MapComponent';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (newEvent) => {
    // Assuming the newEvent contains latitude and longitude
    setEvents([...events, newEvent]);
  };

  return (
    <Container maxWidth="md">
      <ErrorBoundary>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Real-Time Event Tracker
        </Typography>
        <EventForm onCreate={handleCreateEvent} />
        
        <Typography variant="h5" sx={{ mt: 5 }} gutterBottom>
          Event Map:
        </Typography>
        <MapComponent events={events} />

        <Typography variant="h5" sx={{ mt: 5 }} gutterBottom>
          Event List:
        </Typography>
        <EventList events={events} />
      </Box>
      </ErrorBoundary>
    </Container>
  );
};

export default App;
