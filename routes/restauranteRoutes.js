const express = require('express');
const router = express.Router();
const RestauranteController = require('../controllers/Restaurante.Controller');

// Rutas para restaurantes
router.get('/', RestauranteController.index);

// Ruta para comensales ver el menú por QR de mesa (debe ir antes de /:id)
router.get('/menu/:qr_code', RestauranteController.verMenu);

// Rutas para mesas (deben ir antes de /:id para evitar conflictos)
router.get('/:id/mesas', RestauranteController.listarMesas);
router.get('/:id/mesas/:mesaId', RestauranteController.mostrarMesa);
router.post('/:id/mesas', RestauranteController.agregarMesa);
router.put('/:id/mesas/:mesaId', RestauranteController.editarMesa);
router.delete('/:id/mesas/:mesaId', RestauranteController.eliminarMesa);
router.delete('/:id/mesas', RestauranteController.eliminarTodasMesas);

// Rutas para categorías (deben ir antes de /:id para evitar conflictos)
router.get('/:id/categorias', RestauranteController.listarCategorias);
router.get('/:id/categorias/:categoriaId', RestauranteController.mostrarCategoria);
router.post('/:id/categorias', RestauranteController.agregarCategoria);
router.put('/:id/categorias/:categoriaId', RestauranteController.editarCategoria);
router.delete('/:id/categorias/:categoriaId', RestauranteController.eliminarCategoria);
router.delete('/:id/categorias', RestauranteController.eliminarTodasCategorias);

// Rutas generales de restaurante (deben ir al final)
router.get('/:id', RestauranteController.show);
router.post('/', RestauranteController.store);
router.put('/:id', RestauranteController.update);
router.delete('/:id', RestauranteController.destroy);

module.exports = router;
