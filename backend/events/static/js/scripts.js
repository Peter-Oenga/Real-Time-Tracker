async function fetchEvents() {
    const response = await fetch('/api/events/');
    const events = await response.json();
    // Update the UI with event data
}

fetchEvents();


const socket = new WebSocket('ws://' + window.location.host + '/ws/events/');

socket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    // Update UI with real-time data
};
