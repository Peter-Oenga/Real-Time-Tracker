import React from 'react';
import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';

const EventList = ({ events }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <List>
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={`${event.category} - ${event.location}`}
                secondary={`${event.status} - ${event.details}`}
              />
            </ListItem>
            {index < events.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default EventList;
