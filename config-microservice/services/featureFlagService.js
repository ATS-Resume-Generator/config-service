const FeatureFlag = require('../models/FeatureFlag');

class FeatureFlagService {
    async getAllFeatureFlags() {
        return await FeatureFlag.find({});
    }

    async getFeatureFlag(flag) {
        return await FeatureFlag.findOne({ name: flag });
    }

    async toggleFeatureFlag(flag) {
        const featureFlag = await this.getFeatureFlag(flag);
        if (featureFlag) {
            featureFlag.isActive = !featureFlag.isActive;
            await featureFlag.save();
            return featureFlag;
        }
        throw new Error('Feature flag not found');
    }

    async createFeatureFlag(name) {
        const newFlag = new FeatureFlag({ name, isActive: false });
        return await newFlag.save();
    }

    async deleteFeatureFlag(flag) {
        return await FeatureFlag.deleteOne({ name: flag });
    }
}

module.exports = new FeatureFlagService();