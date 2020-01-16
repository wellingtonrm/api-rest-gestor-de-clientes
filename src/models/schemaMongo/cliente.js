const Conexao = require('../../database/mongo');
const bcrypt = require('bcryptjs');
const { Schema } = Conexao;


const ClienteSchema = new Schema({

    tipo: {
        type: String,
        require: true,
    },
    documento: {
        type: String,
        required: true,
    },
    nomecompleto: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    grupo: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now
    },


});

module.exports = Conexao.model('Usuarios', ClienteSchema);