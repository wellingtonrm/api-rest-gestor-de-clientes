const Conexao = require('../../database/mongo');
const { Schema } = Conexao;

const statusUsuario = new Schema({
    email: {
        type: String,
        require: true,
    },
    data: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pendente',
    },
    nivel:{
        type: String,
        default:'cliente',
    }
})

module.exports = Conexao.model('statususuario', statusUsuario);