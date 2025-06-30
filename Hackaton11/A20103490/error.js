exports.notFound = (req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
};

exports.error = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
};
