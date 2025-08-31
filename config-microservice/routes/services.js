const express = require('express');
const router = express.Router();
const serviceDiscovery = require('../services/serviceDiscovery');

// GET /services - Service discovery endpoint
router.get('/', async (req, res) => {
    try {
        const services = await serviceDiscovery.getAllServices();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving services', error: error.message });
    }
});

// POST /services/register - Register new service
router.post('/register', async (req, res) => {
    try {
        const serviceData = req.body;
        const registeredService = await serviceDiscovery.registerService(serviceData);
        res.status(201).json(registeredService);
    } catch (error) {
        res.status(400).json({ message: 'Error registering service', error: error.message });
    }
});

// DELETE /services/:id - Unregister service
router.delete('/:id', async (req, res) => {
    try {
        const serviceId = req.params.id;
        await serviceDiscovery.unregisterService(serviceId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: 'Service not found', error: error.message });
    }
});

module.exports = router;