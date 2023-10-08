const express = require('express');
const app = express();
const port =3000;

app.use(express.json());

let modalidades = [];
let categorias = [];
let equipos = [];
let patrocinantes = [];

app.post('/modalidades', (req, res) => {
  const nuevaModalidad = req.body.modalidad;
  modalidades.push(nuevaModalidad);
  res.json({ message: 'Modalidad agregada exitosamente.' });
});

app.post('/modalidades/:modalidad/categorias', (req, res) => {
  const modalidad = req.params.modalidad;
  const nuevaCategoria = req.body.categoria;

  const modalidadIndex = modalidades.findIndex((m) => m === modalidad);
  if (modalidadIndex === -1) {
    return res.status(404).json({ error: 'La modalidad no existe.' });
  }

  if (!categorias[modalidadIndex]) {
    categorias[modalidadIndex] = [];
  }

  categorias[modalidadIndex].push(nuevaCategoria);
  res.json({ message: 'Categoría agregada exitosamente.' });
});

app.post('/equipos', (req, res) => {
  const nuevoEquipo = req.body.equipo;
  equipos.push(nuevoEquipo);
  res.json({ message: 'Equipo agregado exitosamente.' });
});

app.post('/patrocinantes', (req, res) => {
  const nuevoPatrocinante = req.body.patrocinante;
  patrocinantes.push(nuevoPatrocinante);
  res.json({ message: 'Patrocinante agregado exitosamente.' });
});

app.put('/equipos/:equipo', (req, res) => {
  const equipo = req.params.equipo;
  const nuevoNombre = req.body.nuevoNombre;

  const equipoIndex = equipos.findIndex((e) => e === equipo);
  if (equipoIndex === -1) {
    return res.status(404).json({ error: 'El equipo no existe.' });
  }

  equipos[equipoIndex] = nuevoNombre;
  res.json({ message: 'Equipo editado exitosamente.' });
});

app.put('/modalidades/:modalidad/categorias/:categoria', (req, res) => {
  const modalidad = req.params.modalidad;
  const categoria = req.params.categoria;
  const nuevaCategoria = req.body.nuevaCategoria;

  const modalidadIndex = modalidades.findIndex((m) => m === modalidad);
  if (modalidadIndex === -1) {
    return res.status(404).json({ error: 'La modalidad no existe.' });
  }

  const categoriaIndex = categorias[modalidadIndex].findIndex((c) => c === categoria);
  if (categoriaIndex === -1) {
    return res.status(404).json({ error: 'La categoría no existe.' });
  }

  categorias[modalidadIndex][categoriaIndex] = nuevaCategoria;
  res.json({ message: 'Categoría editada exitosamente.' });
});

app.delete('/equipos/:equipo', (req, res) => {
  const equipo = req.params.equipo;

  const equipoIndex = equipos.findIndex((e) => e === equipo);
  if (equipoIndex === -1) {
    return res.status(404).json({ error: 'El equipo no existe.' });
  }

  equipos.splice(equipoIndex, 1);
  res.json({ message: 'Equipo eliminado exitosamente.' });
});

app.get('/patrocinantes', (req, res) => {
  res.json(patrocinantes);
});

app.get('/equipos', (req, res) => {
  res.json(equipos);
});

app.get('/categorias', (req, res) => {
  const categoriasInscritas = categorias.map((categoria) => {
    const equiposInscritos = equipos.filter((equipo) => categoria.includes(equipo));
    return { categoria, equipos: equiposInscritos };
  });

  res.json(categoriasInscritas);
});

app.delete('/equipos/:equipo/categorias/:categoria', (req, res) => {
  const equipo = req.params.equipo;
  const categoria = req.params.categoría;

  const equipoIndex = equipos.findIndex((e) => e === equipo);
  if (equipoIndex === -1) {
    return res.status(404).json({ error: 'El equipo no existe.' });
  }

  const categoriaIndex = categorias.findIndex((c) => c === categoria);
  if (categoriaIndex === -1) {
    return res.status(404).json({ error: 'La categoría no existe.' });
  }

  const equipoCategorias = categorias[equipoIndex];
  const categoriaEquipoIndex = equipoCategorias.findIndex((c) => c === categoria);
  if (categoriaEquipoIndex === -1) {
    return res.status(404).json({ error: 'El equipo no está inscrito en esa categoría.' });
  }

  equipoCategorias.splice(categoriaEquipoIndex, 1);
  res.json({ message: 'Categoría eliminada exitosamente de la inscripción del equipo.' });
});

app.delete('/modalidades/:modalidad/categorias/:categoria', (req, res) => {
  const modalidad = req.params.modalidad;
  const categoria = req.params.categoria;

  const modalidadIndex = modalidades.findIndex((m) => m === modalidad);
  if (modalidadIndex === -1) {
    return res.status(404).json({ error: 'La modalidad no existe.' });
  }

  const categoriaIndex = categorias[modalidadIndex].findIndex((c) => c === categoria);
  if (categoriaIndex === -1) {
    return res.status(404).json({ error: 'La categoría no existe.' });
  }

  categorias[modalidadIndex].splice(categoriaIndex, 1);
  res.json({ message: 'Categoría eliminada exitosamente.' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});