const mongoose = require('mongoose');

const featureFlagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    enabled: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update the updatedAt field on save
featureFlagSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const FeatureFlag = mongoose.model('FeatureFlag', featureFlagSchema);

module.exports = FeatureFlag;