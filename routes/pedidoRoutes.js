const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');

// Rutas para pedidos
router.get('/', PedidoController.index);
router.get('/:id', PedidoController.show);
router.post('/', PedidoController.store);
router.put('/:id', PedidoController.update);
router.patch('/:id/estado', PedidoController.cambiarEstado);
router.delete('/:id', PedidoController.destroy);

module.exports = router;
