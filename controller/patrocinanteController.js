
const Patrocinante = require('../models/Patrocinante');

// Obtener todos los patrocinantes
exports.obtenerPatrocinantes = (req, res) => {
  Patrocinante.find({}, (err, patrocinantes) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener los patrocinantes.' });
    } else {
      res.json({ patrocinantes });
    }
  });
};

// Obtener un patrocinante específico por su ID
exports.obtenerPatrocinantePorId = (req, res) => {
  const { id } = req.params;

  Patrocinante.findById(id, (err, patrocinante) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener el patrocinante.' });
    } else if (!patrocinante) {
      res.status(404).json({ error: 'El patrocinante no fue encontrado.' });
    } else {
      res.json({ patrocinante });
    }
  });
};