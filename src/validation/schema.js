/**
 * Expected schema structure for a USGS Earthquake GeoJSON feature.
 */
export const GeoJSONSchema = {
    type: "Feature",
    properties: {
        mag: "number",
        place: "string",
        time: "number",
        updated: "number",
        tsunami: "number",
        sig: "number",
        net: "string",
        code: "string",
        ids: "string",
        sources: "string",
        types: "string",
        nst: "number",
        dmin: "number",
        rms: "number",
        gap: "number",
        magType: "string",
        type: "string",
        title: "string"
    },
    geometry: {
        type: "Point",
        coordinates: ["longitude", "latitude", "depth"] // Expected length 3
    }
};
