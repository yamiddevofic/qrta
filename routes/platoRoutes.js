const express = require('express');
const router = express.Router();
const PlatoController = require('../controllers/Plato.Controller');

// Rutas para platos
router.get('/', PlatoController.index);
router.get('/:id', PlatoController.show);
router.post('/', PlatoController.store);
router.put('/:id', PlatoController.update);
router.patch('/:id/estado', PlatoController.cambiarEstado);
router.delete('/:id', PlatoController.destroy);

module.exports = router;
