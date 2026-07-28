const express = require('express');
const router = express.Router();
const FidelizacionController = require('../controllers/Fidelizacion.Controller');

// Rutas para fidelización
router.get('/fidelizacion/:clienteId/:restauranteId', FidelizacionController.getFidelizacion);
router.post('/fidelizacion', FidelizacionController.crearFidelizacion);
router.put('/fidelizacion/:id', FidelizacionController.update);
router.patch('/fidelizacion/:id/estado', FidelizacionController.cambiarEstado);
router.delete('/fidelizacion/:id', FidelizacionController.destroy);

module.exports = router;
