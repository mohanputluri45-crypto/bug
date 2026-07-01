# 🌍 Earthquake Globe — API & Data Processing Module

## 👨‍💻 Developer 2 — Backend/API System

This module handles the complete backend data flow for the Earthquake Globe project. It connects to the live USGS Earthquake API, fetches real-time earthquake data, processes the GeoJSON response, and provides clean formatted data for the 3D Globe and Dashboard modules.

---

# 📌 Responsibilities

- Fetch live earthquake data from USGS API
- Process and clean raw GeoJSON data
- Create reusable API utility functions
- Handle API errors and loading states
- Implement live auto-refresh system
- Provide structured data for visualization

---

# 🌐 API Used

## USGS Earthquake GeoJSON Feed
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

### Current Endpoint
```txt
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
```

---

# ⚙️ Features

✅ Real-time earthquake data fetching  
✅ GeoJSON data processing  
✅ Auto-refresh every 60 seconds  
✅ Error handling system  
✅ Reusable React hooks  
✅ Clean formatted earthquake objects  

---

# 📁 Folder Structure

```bash
src/
│
├── services/
│   └── usgsApi.js
│
├── hooks/
│   └── useEarthquakeData.js
│
├── utils/
│   └── filterData.js
│
└── mock/
    └── mockEarthquakeData.json
```

---

# 📦 Technologies Used

- JavaScript (ES6+)
- React
- Vite
- Fetch API
- USGS GeoJSON API

---

# 🚀 Installation

Clone repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 📡 Example API Fetch

```js
const API_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export async function fetchEarthquakeData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

OB    return data.features.map((quake) => ({
      magnitude: quake.properties.mag,
      place: quake.properties.place,
      time: quake.properties.time,
      lat: quake.geometry.coordinates[1],
      lng: quake.geometry.coordinates[0],
      depth: quake.geometry.coordinates[2],
    }));
  } catch (error) {
OB    console.error("Error fetching earthquake data:", error);
  }
}
```

OB---

# 🔄 Live Update System

```js
setInterval(fetchEarthquakeData, 60000);
```

Updates earthquake data every 60 seconds.
OB
---

# 📊 Sample Data Structure

```json
{
  "magnitude": 5.4,
OB  "place": "Indonesia",
  "time": 1715660000000,
  "lat": -2.45,
  "lng": 118.22,
OB  "depth": 35
}
```
OB
---

# 🧠 Data Fields
OB
| Field | Description |
OB|------|-------------|
| magnitude | Earthquake magnitude |
OB| place | Earthquake location |
OB| time | Timestamp |
| lat | Latitude |
OB| lng | Longitude |
| depth | Depth in KM |

---
OB
# 🔀 Git Branches

## Main Branch
```bash
feature/api-system
```

## Sub Branches
```bash
feature/usgs-fetch
feature/data-processing
feature/live-sync
```

# 🤝 Integration

This module supplies processed earthquake data to:

- 🌍 Globe Visualization Module
- 📈 Dashboard & Analytics Module

---

# 👨‍💻 Developer Info

**Role:** Backend/API & Data Processing  
**Project:** Live Earthquake Globe  
**Technology:** React + USGS API + JavaScript
