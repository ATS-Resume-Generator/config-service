const express = require('express');
const router = express.Router();
const configService = require('../services/configService');
const { validateConfigUpdate } = require('../middleware/validation');

// GET /config - Get all configuration settings
router.get('/', async (req, res) => {
    try {
        const configs = await configService.getAllConfigs();
        res.json(configs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving configurations', error });
    }
});

// GET /config/:service - Get service-specific configuration
router.get('/:service', async (req, res) => {
    try {
        const config = await configService.getConfigByService(req.params.service);
        if (!config) {
            return res.status(404).json({ message: 'Configuration not found' });
        }
        res.json(config);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving configuration', error });
    }
});

// PUT /config/:service - Update service configuration
router.put('/:service', validateConfigUpdate, async (req, res) => {
    try {
        const updatedConfig = await configService.updateConfig(req.params.service, req.body);
        res.json(updatedConfig);
    } catch (error) {
        res.status(500).json({ message: 'Error updating configuration', error });
    }
});

// POST /config/reload - Reload configuration from sources
router.post('/reload', async (req, res) => {
    try {
        await configService.reloadConfigs();
        res.status(200).json({ message: 'Configuration reloaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error reloading configuration', error });
    }
});

module.exports = router;