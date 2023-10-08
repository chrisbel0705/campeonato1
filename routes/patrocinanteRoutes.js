

const express = require('express');
const router = express.Router();
const patrocinantesController = require('../controllers/patrocinantesController');

// Obtener todos los patrocinantes
router.get('/patrocinantes', patrocinantesController.obtenerPatrocinantes);

// Obtener un patrocinante específico por su ID
router.get('/patrocinantes/:id', patrocinantesController.obtenerPatrocinantePorId);

module.exports = router;