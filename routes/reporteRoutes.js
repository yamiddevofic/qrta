const express = require('express');
const router = express.Router();
const ReporteController = require('../controllers/Reporte.Controller');

// Rutas para reportes
router.get('/reportes/:restauranteId', ReporteController.getReportes);
router.get('/reportes/:restauranteId/:fecha', ReporteController.getReportePorFecha);
router.post('/reportes/generar/:restauranteId', ReporteController.generarReporte);
router.put('/reportes/:id', ReporteController.updateReporte);
router.delete('/reportes/:id', ReporteController.deleteReporte);

module.exports = router;
