import { CacheManager } from './cacheManager.js';
import { MemoryCache } from './memoryCache.js';

export function runCacheTests() {
    console.log('Running Cache Tests...');

    // 1. Clear everything initially
    MemoryCache.clear();

    // 2. Test saving and retrieving valid data
    const dummyData = [{ id: "eq1", mag: 4.0 }];
    CacheManager.saveData(dummyData);
    
    const retrieved = CacheManager.getValidData();
    console.assert(retrieved !== null && retrieved[0].id === "eq1", "Test 1 Failed: Could not retrieve cached data.");

    console.log('Cache tests completed successfully!');
}

// runCacheTests();
