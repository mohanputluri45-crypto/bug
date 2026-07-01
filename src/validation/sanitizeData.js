/**
 * Sanitizes the earthquake properties, providing fallbacks for missing non-critical data.
 * @param {Object} feature - The validated GeoJSON feature object.
 * @returns {Object} A sanitized version of the feature properties and geometry.
 */
export function sanitizeData(feature) {
    const props = feature.properties || {};
    const coords = (feature.geometry && feature.geometry.coordinates) || [0, 0, 0];

    return {
        id: feature.id || `unknown-${Date.now()}`,
        magnitude: props.mag, // Assumed valid due to validateFeature
        place: props.place ? props.place.trim() : 'Unknown Location',
        time: props.time,
        updated: props.updated || props.time,
        tsunami: props.tsunami === 1,
        significance: props.sig || 0,
        type: props.type || 'earthquake',
        title: props.title || `M ${props.mag} - ${props.place || 'Unknown'}`,
        longitude: coords[0],
        latitude: coords[1],
        depth: coords[2] || 0 // Default depth to 0 if missing
    };
}
