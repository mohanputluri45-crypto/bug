import { GlobalEmitter } from './eventEmitter.js';
import { EventTypes } from './eventTypes.js';

export function setupDefaultSubscribers() {
    GlobalEmitter.on(EventTypes.MAJOR_EARTHQUAKE, (quake) => {
        console.warn(`🚨 MAJOR EARTHQUAKE ALERT: M${quake.magnitude} in ${quake.place}!`);
        // In a real app, this might trigger an email or push notification
    });

    GlobalEmitter.on(EventTypes.API_ERROR, (error) => {
        console.error('API Error Subscriber caught an issue:', error.message);
    });
}
