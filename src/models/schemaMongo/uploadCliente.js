const Conexao = require('../../database/mongo');
const bcrypt = require('bcryptjs');
const { Schema } = Conexao;



const UploadCliente = new Schema({
    idCliente:{
        type: String,
        required: true,
    },
   nome:{
        type: String,
        required: true,
   },
   key:{
       type: String,
       required: true,

   },
   size:{
       type: String,
       required: true, 
   },
   url:{
       type: String,
      

   },

   dataCreat:{
       type: Date,
       default: Date.now
   }
   

    

})
module.exports = Conexao.model('uploadCliente', UploadCliente);