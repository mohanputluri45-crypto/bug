export const CacheConfig = {
    // How long cached earthquake data is considered fresh (e.g., 5 minutes)
    TTL_MS: 5 * 60 * 1000,
    
    // The key used to store data in localStorage
    STORAGE_KEY: 'terra_earthquake_cache',
    
    // The key used to store the timestamp of when data was last cached
    TIMESTAMP_KEY: 'terra_earthquake_cache_timestamp'
};
