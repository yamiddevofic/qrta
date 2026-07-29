const express = require('express');
const router = express.Router();
const ReporteController = require('../controllers/Reporte.Controller');

// Rutas para reportes
router.get('/:restauranteId', ReporteController.getReportes);
router.get('/:restauranteId/:fecha', ReporteController.getReportePorFecha);
router.post('/generar/:restauranteId', ReporteController.generarReporte);
router.put('/:id', ReporteController.updateReporte);
router.delete('/:id', ReporteController.deleteReporte);

module.exports = router;
