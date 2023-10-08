
const Categoria = require('../models/Categoria');

// Obtener todas las categorías
exports.obtenerCategorias = (req, res) => {
  Categoria.find({}, (err, categorias) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener las categorías.' });
    } else {
      res.json({ categorias });
    }
  });
};

// Obtener una categoría específica por su ID
exports.obtenerCategoriaPorId = (req, res) => {
  const { id } = req.params;

  Categoria.findById(id, (err, categoria) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener la categoría.' });
    } else if (!categoria) {
      res.status(404).json({ error: 'La categoría no fue encontrada.' });
    } else {
      res.json({ categoria });
    }
  });
};