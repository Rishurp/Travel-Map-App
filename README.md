
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

## Screenshots

Here's a preview of the application:

![Screenshot 2024-10-12 133049](https://github.com/user-attachments/assets/03ac3817-4399-453e-ae0e-7ddc9915155f)
![Screenshot 2024-10-12 133122](https://github.com/user-attachments/assets/ce2f7944-5976-4b96-a065-d7b45c9de5ef)
![Screenshot 2024-10-12 133158](https://github.com/user-attachments/assets/34e2ace4-f038-4559-af1d-86f6ca03c238)
![Screenshot (342)](https://github.com/user-attachments/assets/67361167-cf2b-49d4-8533-8d854bb5100c)
![Screenshot (343)](https://github.com/user-attachments/assets/89cace8c-1008-4804-bb35-71eb98f92a33)






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

---

Make sure to update the screenshot path accordingly!
