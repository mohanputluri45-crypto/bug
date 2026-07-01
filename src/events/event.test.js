import { GlobalEmitter } from './eventEmitter.js';

export function testEventEmitter() {
    console.log("Testing Event Emitter...");
    
    let wasCalled = false;
    let receivedData = null;

    const testCallback = (data) => {
        wasCalled = true;
        receivedData = data;
    };

    GlobalEmitter.on('testEvent', testCallback);
    GlobalEmitter.emit('testEvent', { status: 'success' });

    console.assert(wasCalled === true, "Test Failed: Listener was not called.");
    console.assert(receivedData.status === 'success', "Test Failed: Data was not passed correctly.");

    GlobalEmitter.off('testEvent', testCallback);
    console.log("Event emitter tests completed.");
}

// testEventEmitter();
