const Empleado = require('../models/Empleado');
const dateAndTime = require('date-and-time');

const formatDate = (d) => dateAndTime.format(d, 'YYYY-MM-DD HH:mm:ss');

const formatEmpleado = (emp) => {
  const obj = emp && emp.toObject ? emp.toObject() : emp || {};
  if (obj.fechaIngreso) obj.fechaIngreso = formatDate(new Date(obj.fechaIngreso));
  return obj;
};

// Lista de empleados
const index = async (req, res, next) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados.map(formatEmpleado));
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los empleados', error: err.message });
  }
};

// Consulta empleado por ID
const show = async (req, res, next) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(formatEmpleado(empleado));
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el empleado', error: err.message });
  }
};

// Guardar empleado
const store = async (req, res, next) => {
  try {
    const empleado = new Empleado({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      telefono: req.body.telefono,
      fechaIngreso: new Date(),
      salario: req.body.salario
    });
    await empleado.save();
    res.status(201).json({ message: 'Empleado guardado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al guardar el empleado', error: err.message });
  }
};

module.exports = { index, show, store };