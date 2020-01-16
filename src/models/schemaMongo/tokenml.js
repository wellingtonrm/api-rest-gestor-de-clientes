const Conexao = require('../../controllers/database/mongo');
const { Schema } = Conexao;


const tokenmlSchema = new Schema({
    idusercliente: {
        type: String,
        required: true,
    },
    iduserml: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }, 
    refreshtoken:{
        type: String,
        required: true,
    },
    expira: {
        type: String,
        required: true,
    },


});

module.exports = Conexao.model('tokenml', tokenmlSchema);