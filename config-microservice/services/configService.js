const mongoose = require('mongoose');
const Configuration = require('../models/Configuration');
const { reloadConfigurations } = require('../utils/configValidator');

class ConfigService {
    async getAllConfigurations() {
        try {
            return await Configuration.find({});
        } catch (error) {
            throw new Error('Error retrieving configurations: ' + error.message);
        }
    }

    async getServiceConfiguration(service) {
        try {
            return await Configuration.findOne({ service });
        } catch (error) {
            throw new Error('Error retrieving configuration for service: ' + error.message);
        }
    }

    async updateServiceConfiguration(service, configData) {
        try {
            const updatedConfig = await Configuration.findOneAndUpdate(
                { service },
                { $set: configData },
                { new: true, runValidators: true }
            );
            return updatedConfig;
        } catch (error) {
            throw new Error('Error updating configuration for service: ' + error.message);
        }
    }

    async reloadConfigurations() {
        try {
            await reloadConfigurations();
            return { message: 'Configurations reloaded successfully' };
        } catch (error) {
            throw new Error('Error reloading configurations: ' + error.message);
        }
    }
}

module.exports = new ConfigService();