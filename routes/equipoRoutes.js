// routes/equiposRoutes.js

const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equiposController');

// Obtener todos los equipos
router.get('/equipos', equiposController.obtenerEquipos);

// Obtener un equipo específico por su ID
router.get('/equipos/:id', equiposController.obtenerEquipoPorId);

module.exports = router;