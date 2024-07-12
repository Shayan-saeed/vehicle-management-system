const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const pdfGenerator = require('../utils/pdfGenerator');
const emailSender = require('../utils/emailSender');

// Create a new vehicle entry
router.post('/', async (req, res) => {
    try {
        const newVehicle = await Vehicle.create(req.body);
        const pdfBuffer = await pdfGenerator.generatePDF(newVehicle); // Implement this function
        await emailSender.sendEmail(newVehicle.email, pdfBuffer); // Implement this function
        res.status(201).json(newVehicle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Read a specific vehicle profile
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }
        res.render('profile', { vehicle }); // Render profile.ejs with vehicle details
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
