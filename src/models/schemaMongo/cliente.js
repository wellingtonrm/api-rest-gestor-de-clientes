const Conexao = require('../../database/mongo');
const bcrypt = require('bcryptjs');
const { Schema } = Conexao;


const ClienteSchema = new Schema({
    
    nomeCompleto: {
        type: String,
        require: true,
    },
    celular: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    
    CPF:{
        type: String,
        required: true,
    },

   
    data: {
        type: Date,
        default: Date.now
    },
   

});
ClienteSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});
module.exports = Conexao.model('clientes', ClienteSchema);