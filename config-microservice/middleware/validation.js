const Joi = require('joi');

const configSchema = Joi.object({
    key: Joi.string().required(),
    value: Joi.string().required(),
    service: Joi.string().required(),
    version: Joi.number().integer().min(1).optional(),
});

const featureFlagSchema = Joi.object({
    flag: Joi.string().required(),
    enabled: Joi.boolean().required(),
});

const serviceSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
});

const validateConfig = (req, res, next) => {
    const { error } = configSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateFeatureFlag = (req, res, next) => {
    const { error } = featureFlagSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateService = (req, res, next) => {
    const { error } = serviceSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateConfig,
    validateFeatureFlag,
    validateService,
};