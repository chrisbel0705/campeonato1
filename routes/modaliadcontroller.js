
const express = require('express');
const router = express.Router();
const modalidadesController = require('../controllers/modalidadesController');

// Obtener todas las modalidades
router.get('/modalidades', modalidadesController.obtenerModalidades);

// Obtener una modalidad específica por su ID
router.get('/modalidades/:id', modalidadesController.obtenerModalidadPorId);

module.exports = router;