const express = require('express');
const router = express.Router();
const RestauranteController = require('../controllers/RestauranteController');

// Rutas para restaurantes
router.get('/', RestauranteController.index);
router.get('/:id', RestauranteController.show);
router.post('/', RestauranteController.store);
router.put('/:id', RestauranteController.update);
router.delete('/:id', RestauranteController.destroy);

// Rutas para agregar mesas y categorías
router.post('/:id/mesas', RestauranteController.agregarMesa);
router.post('/:id/categorias', RestauranteController.agregarCategoria);

module.exports = router;
