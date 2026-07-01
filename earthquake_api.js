// The United States Geological Survey (USGS) provides a free, public API 

const fetchLiveEarthquakes = async () => {
    // You can change the endpoint based on your needs. Other options include:
    // - all_day.geojson (All earthquakes past day)
    // - significant_month.geojson (Significant earthquakes past month)
    // - 4.5_day.geojson (Magnitude 4.5+ past day)
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(`Found ${data.metadata.count} earthquakes in the last hour.`);

        // Loop through the features (earthquakes)
        data.features.forEach(quake => {
            const mag = quake.properties.mag;
            const place = quake.properties.place;
            const time = new Date(quake.properties.time).toLocaleString();

            // Coordinates are [longitude, latitude, depth]
            const coords = quake.geometry.coordinates;
            const lng = coords[0];
            const lat = coords[1];

            console.log(`[${time}] Magnitude ${mag} at ${place} (Lat: ${lat}, Lng: ${lng})`);
        });
        
        return data;
    } catch (error) {
        console.error("Could not fetch earthquake data:", error);
    }
};

// Call the function
// fetchLiveEarthquakes();
