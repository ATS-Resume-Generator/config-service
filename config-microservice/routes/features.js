const express = require('express');
const router = express.Router();
const featureFlagService = require('../services/featureFlagService');
const validationMiddleware = require('../middleware/validation');
const Joi = require('joi');

// Schema for feature flag validation
const featureFlagSchema = Joi.object({
    flag: Joi.string().required(),
});

// GET /features - Get feature flags
router.get('/', async (req, res) => {
    try {
        const flags = await featureFlagService.getAllFlags();
        res.json(flags);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving feature flags', error });
    }
});

// PUT /features/:flag - Toggle feature flag
router.put('/:flag', validationMiddleware(featureFlagSchema), async (req, res) => {
    const { flag } = req.params;
    try {
        const updatedFlag = await featureFlagService.toggleFlag(flag);
        res.json(updatedFlag);
    } catch (error) {
        res.status(500).json({ message: 'Error toggling feature flag', error });
    }
});

module.exports = router;