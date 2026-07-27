const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
  nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaIngreso: {
        type: Date,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Empleado = mongoose.model('Empleado', empleadoSchema);
module.exports = Empleado;