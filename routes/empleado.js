const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/EmpleadoController');

// Rutas para empleados
router.get('/empleados', EmpleadoController.index);
router.post('/empleados/:id', EmpleadoController.show);
router.post('/empleados', EmpleadoController.store);

module.exports = router;