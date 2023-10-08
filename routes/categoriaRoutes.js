// routes/categoriasRoutes.js

const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

// Obtener todas las categorías
router.get('/categorias', categoriasController.obtenerControladores);

// Obtener una categoría específica por su ID
router.get('/categorias/:id', categoriasController.obtenerCategoriaPorId);

module.exports = router;