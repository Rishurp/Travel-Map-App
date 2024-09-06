# Travel Map App

Travel Map App is an interactive platform for users to mark and explore travel destinations on a map. It enables users to create personalized travel itineraries, track visited locations, and plan future trips. The app is built with **React**, **Node.js**, **Express.js**, and **MongoDB**, integrating the **Mapbox API** to provide an engaging visual experience.

## Features

- **Interactive Map:** Mark and visualize travel destinations using Mapbox.
- **Personalized Itineraries:** Create custom travel itineraries by adding visited or planned locations.
- **Secure Login:** User authentication and account creation with secure login using React and Material-UI.
- **Backend Storage:** Stores user data securely on the server using Express and MongoDB.

## Tech Stack

- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Integration:** Mapbox API for interactive maps
- **Authentication:** Secure login system

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (locally or cloud instance)
- Mapbox account for API access

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rishurp/Travel-Map-App-Frontend.git
   cd travel-map-app
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Set up environment variables for the backend (MongoDB URI, Mapbox API key).

### Running the App

1. Start the frontend server:
   ```bash
   npm start
   ```

2. Your app will be running at `http://localhost:3000`.

### Scripts

- **Start**: `npm start` - Starts the app in development mode.
- **Build**: `npm run build` - Builds the app for production.
- **Test**: `npm test` - Runs the test suite.

## Dependencies

Key packages used in the project:
- `@material-ui/core`: For UI components.
- `axios`: For making HTTP requests.
- `mapbox-gl`: For integrating Mapbox maps.
- `react-map-gl`: A React wrapper for Mapbox GL JS.
- `timeago.js`: For formatting time in a readable way.

## API Proxy
The app uses a proxy configuration in `package.json` to communicate with the backend API hosted at `https://travel-map-ch6g.onrender.com/api`.

## License
This project is licensed under the MIT License.
