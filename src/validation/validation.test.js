import { validateFeature } from './validateFeature.js';
import { sanitizeData } from './sanitizeData.js';

// Mock Data
const validQuake = {
    type: "Feature",
    properties: { mag: 5.4, place: "California", time: 1620000000000 },
    geometry: { type: "Point", coordinates: [-118.2, 34.0, 10] }
};

const invalidQuake = {
    type: "Feature",
    properties: { mag: null, place: "Nowhere" }, // Missing time, invalid mag
    geometry: { type: "Point", coordinates: [200, 34.0] } // Invalid longitude
};

// Simple Test Runner
export function runTests() {
    console.log("Running Validation Tests...");

    const isValid1 = validateFeature(validQuake);
    console.assert(isValid1 === true, "Test 1 Failed: Valid quake rejected.");

    const isValid2 = validateFeature(invalidQuake);
    console.assert(isValid2 === false, "Test 2 Failed: Invalid quake accepted.");

    const sanitized = sanitizeData(validQuake);
    console.assert(sanitized.place === "California", "Test 3 Failed: Sanitize data altered valid string.");

    console.log("All validation tests completed.");
}

// runTests();
