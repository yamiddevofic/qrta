const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Rutas para administradores
router.get('/', AdminController.index);
router.get('/:id', AdminController.show);
router.post('/', AdminController.store);
router.put('/:id', AdminController.update);
router.patch('/:id/estado', AdminController.cambiarEstado);
router.delete('/:id', AdminController.destroy);

module.exports = router;
