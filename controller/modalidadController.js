// controllers/modalidadesController.js

// Importar el modelo de Modalidad
const Modalidad = require('../models/Modalidad');

// Obtener todas las modalidades
exports.obtenerModalidades = (req, res) => {
  Modalidad.find({}, (err, modalidades) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener las modalidades.' });
    } else {
      res.json({ modalidades });
    }
  });
};

// Obtener una modalidad específica por su ID
exports.obtenerModalidadPorId = (req, res) => {
  const { id } = req.params;

  Modalidad.findById(id, (err, modalidad) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener la modalidad.' });
    } else if (!modalidad) {
      res.status(404).json({ error: 'La modalidad no fue encontrada.' });
    } else {
      res.json({ modalidad });
    }
  });
};