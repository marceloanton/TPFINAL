const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Ruta protegida por autenticación
router.get('/dashboard', dashboardController.getDashboardData);

module.exports = router;
