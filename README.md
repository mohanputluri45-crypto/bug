# ?? Earthquake Globe — API & Data Processing Module

## ????? Developer 2 — Backend/API System

This module handles the complete backend data flow for the Earthquake Globe project. It connects to the live USGS Earthquake API, fetches real-time earthquake data, processes the GeoJSON response, and provides clean formatted data for the 3D Globe and Dashboard modules.

---

# ?? Responsibilities

- Fetch live earthquake data from USGS API
- Process and clean raw GeoJSON data
- Create reusable API utility functions
- Handle API errors and loading states
- Implement live auto-refresh system
- Provide structured data for visualization

---

# ?? API Used

## USGS Earthquake GeoJSON Feed
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

### Current Endpoint
`	xt
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
`

---

# ?? Features

? Real-time earthquake data fetching
? GeoJSON data processing
? Auto-refresh every 60 seconds
? Error handling system
? Reusable React hooks
? Clean formatted earthquake objects

---

# ?? Folder Structure

`ash
src/
¦
+-- services/
¦   +-- usgsApi.js
¦
+-- hooks/
¦   +-- useEarthquakeData.js
¦
+-- utils/
¦   +-- filterData.js
¦
+-- mock/
    +-- mockEarthquakeData.json
`

---

# ?? Technologies Used

- JavaScript (ES6+)
- React
- Vite
- Fetch API
- USGS GeoJSON API

---

# ?? Installation

Clone repository:

`ash
git clone <repository-url>
`

Install dependencies:

`ash
npm install
`

Run development server:

`ash
npm run dev
`

---

# ?? Example API Fetch

`js
const API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export async function fetchEarthquakeData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.features.map((quake) => ({
      magnitude: quake.properties.mag,
      place: quake.properties.place,
      time: quake.properties.time,
      lat: quake.geometry.coordinates[1],
      lng: quake.geometry.coordinates[0],
      depth: quake.geometry.coordinates[2],
    }));
  } catch (error) {
    console.error("Error fetching earthquake data:", error);
  }
}
`

---

# ?? Live Update System

`js
setInterval(fetchEarthquakeData, 60000);
`

Updates earthquake data every 60 seconds.

---

# ?? Sample Data Structure

`json
{
  "magnitude": 5.4,
  "place": "Indonesia",
  "time": 1715660000000,
  "lat": -2.45,
  "lng": 118.22,
  "depth": 35
}
`

---

# ?? Data Fields

| Field | Description |
|------|-------------|
| magnitude | Earthquake magnitude |
| place | Earthquake location |
| time | Timestamp |
| lat | Latitude |
| lng | Longitude |
| depth | Depth in KM |

---

# ?? Git Branches

## Main Branch
`ash
feature/api-system
`

## Sub Branches
`ash
feature/usgs-fetch
feature/data-processing
feature/live-sync
`

# ?? Integration

This module supplies processed earthquake data to:

- ?? Globe Visualization Module
- ?? Dashboard & Analytics Module

---

# ????? Developer Info

**Role:** Backend/API & Data Processing
**Project:** Live Earthquake Globe
**Technology:** React + USGS API + JavaScript
