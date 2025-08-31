const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const configRoutes = require('./routes/config');
const featureRoutes = require('./routes/features');
const serviceRoutes = require('./routes/services');
const { connectToDatabase } = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/config', configRoutes);
app.use('/features', featureRoutes);
app.use('/services', serviceRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});