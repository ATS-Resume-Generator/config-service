function validateConfig(config, schema) {
    const { error } = schema.validate(config);
    if (error) {
        throw new Error(`Configuration validation error: ${error.message}`);
    }
}

function validateFeatureFlag(flag, schema) {
    const { error } = schema.validate(flag);
    if (error) {
        throw new Error(`Feature flag validation error: ${error.message}`);
    }
}

function validateService(service, schema) {
    const { error } = schema.validate(service);
    if (error) {
        throw new Error(`Service validation error: ${error.message}`);
    }
}

module.exports = {
    validateConfig,
    validateFeatureFlag,
    validateService,
};