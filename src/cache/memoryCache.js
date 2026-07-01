// Fallback cache if localStorage is disabled or restricted
let memoryStore = null;
let memoryTimestamp = null;

export const MemoryCache = {
    save: function(data) {
        memoryStore = JSON.parse(JSON.stringify(data)); // Deep copy to prevent reference mutation
        memoryTimestamp = Date.now();
        return true;
    },

    load: function() {
        if (!memoryStore || !memoryTimestamp) return null;
        
        return {
            data: JSON.parse(JSON.stringify(memoryStore)),
            timestamp: memoryTimestamp
        };
    },

    clear: function() {
        memoryStore = null;
        memoryTimestamp = null;
    }
};
