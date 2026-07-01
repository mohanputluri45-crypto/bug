/**
 * Utility to log and keep track of validation errors.
 */
const validationErrors = [];

export const ErrorHandler = {
    logError: function(message, featureData = null) {
        const errorEntry = {
            timestamp: new Date().toISOString(),
            message: message,
            data: featureData
        };
        validationErrors.push(errorEntry);
        console.warn(`[Validation Error]: ${message}`);
    },

    getErrors: function() {
        return [...validationErrors];
    },

    clearErrors: function() {
        validationErrors.length = 0;
    },

    getErrorCount: function() {
        return validationErrors.length;
    }
};
