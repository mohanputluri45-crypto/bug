/**
 * Validates a single earthquake feature to ensure critical data is present.
 * @param {Object} feature - The GeoJSON feature object.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateFeature(feature) {
    if (!feature || feature.type !== 'Feature') {
        return false;
    }

    const props = feature.properties;
    const geom = feature.geometry;

    // Check critical properties
    if (!props || typeof props.mag !== 'number' || typeof props.time !== 'number') {
        return false;
    }

    // Check critical geometry
    if (!geom || geom.type !== 'Point' || !Array.isArray(geom.coordinates) || geom.coordinates.length < 2) {
        return false;
    }

    // Check valid coordinates (Longitude: -180 to 180, Latitude: -90 to 90)
    const [lng, lat] = geom.coordinates;
    if (lng < -180 || lng > 180 || lat < -90 || lat > 90) {
        return false;
    }

    return true;
}
