const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/EmpleadoController');

// Rutas para empleados
router.get('/', EmpleadoController.index);
router.get('/:id', EmpleadoController.show);
router.post('/', EmpleadoController.store);
router.put('/:id', EmpleadoController.update);
router.patch('/:id/estado', EmpleadoController.cambiarEstado);
router.delete('/:id', EmpleadoController.destroy);

module.exports = router;
