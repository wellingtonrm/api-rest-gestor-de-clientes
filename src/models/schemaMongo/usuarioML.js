const Conexao = require('../../controllers/database/mongo');
const bcrypt = require('bcryptjs');
const { Schema } = Conexao;


const usuaruarioMLSchema = new Schema({

    _idcliente: {
        type: String,
        required: true,
    },
    iduser: {
        type: String,
        required: true,
    },
 
   nickname: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    firtname: {
        type: String,
        required: true,
        select: false,
    },

    lastname: {
        type: String,
        required: true,
    },


    emailml: {
        type: String,
        required: true,
    },
    indentificador: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    
});

module.exports = Conexao.model('usuarioml', usuaruarioMLSchema);