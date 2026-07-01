import { CacheConfig } from './cacheConfig.js';

export const LocalStorageCache = {
    save: function(data) {
        try {
            const timestamp = Date.now();
            localStorage.setItem(CacheConfig.STORAGE_KEY, JSON.stringify(data));
            localStorage.setItem(CacheConfig.TIMESTAMP_KEY, timestamp.toString());
            return true;
        } catch (e) {
            console.warn('[Cache] Failed to save to localStorage', e);
            return false;
        }
    },

    load: function() {
        try {
            const dataStr = localStorage.getItem(CacheConfig.STORAGE_KEY);
            const timeStr = localStorage.getItem(CacheConfig.TIMESTAMP_KEY);
            
            if (!dataStr || !timeStr) return null;

            return {
                data: JSON.parse(dataStr),
                timestamp: parseInt(timeStr, 10)
            };
        } catch (e) {
            console.warn('[Cache] Failed to load from localStorage', e);
            return null;
        }
    },

    clear: function() {
        localStorage.removeItem(CacheConfig.STORAGE_KEY);
        localStorage.removeItem(CacheConfig.TIMESTAMP_KEY);
    }
};
