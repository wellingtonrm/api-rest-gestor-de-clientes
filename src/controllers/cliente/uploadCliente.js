const SchemaUploadCliente  = require('../../models/schemaMongo/uploadCliente');


const uploadCliente = async (req, res)=> {

        const { originalname: nome,  bytes: size, key, url =" " } = req.file;

    console.log(nome)

        await SchemaUploadCliente.create({
            idCliente: req.userID,
            nome,
            key,
            size,
            url: url


        })

     return res.send({res:"ok"})
    }


module.exports = uploadCliente;