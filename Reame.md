# Real-Time Event Tracker

## Overview

The **Real-Time Event Tracker** is a full-stack application designed to allow users to track and manage events in real-time. The application consists of a Django backend and a React frontend, integrated to provide a seamless user experience. The app includes features such as event creation, real-time updates, and robust error handling mechanisms.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Backend Setup (Django)](#backend-setup-django)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Error Boundary](#error-boundary)
  - [EventForm](#eventform)
  - [EventList](#eventlist)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Debugging and Troubleshooting](#debugging-and-troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Event Creation:** Users can create events by filling out a form with details such as event name, location, and timestamp.
- **Real-Time Tracking:** Events are tracked in real-time, displaying their current status and location on the frontend.
- **Error Handling:** Robust error handling using an `ErrorBoundary` component ensures the app remains stable even if something goes wrong.
- **Cross-Platform:** The application is designed to work on both web and mobile platforms, thanks to its responsive design.

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - React Router
  - Axios
  - React-Leaflet (for maps)
  - HTML5 & CSS3

- **Backend:**
  - Django
  - Django REST Framework (DRF)
  - PostgreSQL (Database)
  - Gunicorn (for deployment)

## Setup and Installation

### Backend Setup (Django)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/real-time-event-tracker.git
   cd real-time-event-tracker/backend
