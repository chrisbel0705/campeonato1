
const Equipo = require('../models/Equipo');

// Obtener todos los equipos
exports.obtenerEquipos = (req, res) => {
  Equipo.find({}, (err, equipos) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener los equipos.' });
    } else {
      res.json({ equipos });
    }
  });
};

// Obtener un equipo específico por su ID
exports.obtenerEquipoPorId = (req, res) => {
  const { id } = req.params;

  Equipo.findById(id, (err, equipo) => {
    if (err) {
      res.status(500).json({ error: 'Ocurrió un error al obtener el equipo.' });
    } else if (!equipo) {
      res.status(404).json({ error: 'El equipo no fue encontrado.' });
    } else {
      res.json({ equipo });
    }
  });
};