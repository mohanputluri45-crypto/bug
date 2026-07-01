import { CacheConfig } from './cacheConfig.js';
import { LocalStorageCache } from './localStorageCache.js';
import { MemoryCache } from './memoryCache.js';

export const CacheManager = {
    // Attempt to use LocalStorage, fallback to Memory
    saveData: function(data) {
        const savedToLocal = LocalStorageCache.save(data);
        if (!savedToLocal) {
            MemoryCache.save(data);
        }
    },

    // Retrieve data if it hasn't expired yet
    getValidData: function() {
        let cached = LocalStorageCache.load() || MemoryCache.load();
        
        if (!cached) return null;

        const isExpired = (Date.now() - cached.timestamp) > CacheConfig.TTL_MS;
        
        if (isExpired) {
            console.log('[Cache] Data expired. Clearing cache.');
            LocalStorageCache.clear();
            MemoryCache.clear();
            return null;
        }

        console.log('[Cache] Serving valid data from cache.');
        return cached.data;
    }
};
