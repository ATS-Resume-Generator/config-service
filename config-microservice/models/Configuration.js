const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
        unique: true
    },
    settings: {
        type: Object,
        required: true
    },
    version: {
        type: Number,
        default: 1
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
configurationSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Configuration = mongoose.model('Configuration', configurationSchema);

module.exports = Configuration;