const mongoose = require('mongoose');
const Service = require('../models/Service');

class ServiceDiscovery {
    constructor() {
        this.services = new Map();
    }

    async registerService(serviceData) {
        const service = new Service(serviceData);
        await service.save();
        this.services.set(service._id.toString(), service);
        return service;
    }

    async unregisterService(serviceId) {
        await Service.findByIdAndDelete(serviceId);
        this.services.delete(serviceId);
    }

    async getAllServices() {
        return await Service.find();
    }

    async getServiceById(serviceId) {
        return await Service.findById(serviceId);
    }

    async updateService(serviceId, updateData) {
        const updatedService = await Service.findByIdAndUpdate(serviceId, updateData, { new: true });
        if (updatedService) {
            this.services.set(serviceId, updatedService);
        }
        return updatedService;
    }

    async clearServices() {
        this.services.clear();
    }
}

module.exports = new ServiceDiscovery();