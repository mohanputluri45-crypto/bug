import { GlobalEmitter } from './eventEmitter.js';

// Utility to listen to all known events and log them for debugging
export function enableEventLogging(eventTypesArray) {
    console.log('[EventLogger] Event logging enabled.');
    
    eventTypesArray.forEach(eventType => {
        GlobalEmitter.on(eventType, (data) => {
            console.log(`[EventLogger] Caught event '${eventType}':`, data);
        });
    });
}
