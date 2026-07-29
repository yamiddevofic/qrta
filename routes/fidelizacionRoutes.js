const express = require('express');
const router = express.Router();
const FidelizacionController = require('../controllers/Fidelizacion.Controller');

// Rutas para fidelización
router.get('/', FidelizacionController.index);
router.get('/cliente/:clienteId/restaurante/:restauranteId', FidelizacionController.getFidelizacion);
router.get('/:id', FidelizacionController.show);
router.post('/', FidelizacionController.crearFidelizacion);
router.put('/:id', FidelizacionController.update);
router.patch('/:id/estado', FidelizacionController.cambiarEstado);
router.delete('/:id', FidelizacionController.destroy);

module.exports = router;
