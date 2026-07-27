const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// Rutas para clientes
router.get('/', ClienteController.index);
router.get('/:id', ClienteController.show);
router.post('/', ClienteController.store);
router.put('/:id', ClienteController.update);
router.patch('/:id/estado', ClienteController.cambiarEstado);
router.delete('/:id', ClienteController.destroy);

module.exports = router;
