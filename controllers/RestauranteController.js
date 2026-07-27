const Restaurante = require('../models/Restaurante');

// Guardar restaurante (se crea vacío, sin mesas ni categorías todavía)
const store = async (req, res) => {
    try {
        const restaurante = new Restaurante({
            nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
            adm_id: req.body.adm_id
        });
        await restaurante.save();
        res.status(201).json(restaurante);
    } catch (err) {
        res.status(500).json({ message: 'Error al guardar el restaurante', error: err.message });
    }
};

// Listar restaurantes
const index = async (req, res) => {
    try {
        const restaurantes = await Restaurante.find();
        res.json(restaurantes);
    } catch (err) {
        res.status(500).json({ message: 'Error al listar los restaurantes', error: err.message });
    }
};

// Consultar un restaurante por ID
const show = async (req, res) => {
    try {
        const restaurante = await Restaurante.findById(req.params.id);
        if (!restaurante) return res.status(404).json({ message: 'Restaurante no encontrado' });
        res.json(restaurante);
    } catch (err) {
        res.status(500).json({ message: 'Error al consultar el restaurante', error: err.message });
    }
};

// Agregar una mesa nueva (operación separada de "crear restaurante")
const agregarMesa = async (req, res) => {
    try {
        const restaurante = await Restaurante.findById(req.params.id);
        if (!restaurante) return res.status(404).json({ message: 'Restaurante no encontrado' });

        restaurante.mesas.push({
            numero: req.body.numero,
            qr_code: req.body.qr_code
        });
        await restaurante.save();
        res.status(201).json(restaurante.mesas[restaurante.mesas.length - 1]);
    } catch (err) {
        res.status(500).json({ message: 'Error al agregar la mesa', error: err.message });
    }
};

// Agregar una categoría nueva
const agregarCategoria = async (req, res) => {
    try {
        const restaurante = await Restaurante.findById(req.params.id);
        if (!restaurante) return res.status(404).json({ message: 'Restaurante no encontrado' });

        restaurante.categorias.push({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        });
        await restaurante.save();
        res.status(201).json(restaurante.categorias[restaurante.categorias.length - 1]);
    } catch (err) {
        res.status(500).json({ message: 'Error al agregar la categoría', error: err.message });
    }
};

// Modificar restaurante
const update = async (req, res) => {
    try {
        const restaurante = await Restaurante.findByIdAndUpdate(
            req.params.id,
            {
                nombre: req.body.nombre,
                ubicacion: req.body.ubicacion,
                adm_id: req.body.adm_id
            },
            { new: true, runValidators: true }
        );
        if (!restaurante) return res.status(404).json({ message: 'Restaurante no encontrado' });
        res.json(restaurante);
    } catch (err) {
        res.status(500).json({ message: 'Error al modificar el restaurante', error: err.message });
    }
};

// Eliminar restaurante
const destroy = async (req, res) => {
    try {
        const restaurante = await Restaurante.findByIdAndDelete(req.params.id);
        if (!restaurante) return res.status(404).json({ message: 'Restaurante no encontrado' });
        res.json({ message: 'Restaurante eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el restaurante', error: err.message });
    }
};

module.exports = {
    store,
    index,
    show,
    agregarMesa,
    agregarCategoria,
    update,
    destroy
};