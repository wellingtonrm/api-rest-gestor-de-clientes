const SchemaUploadCliente  = require('../../models/schemaMongo/uploadCliente');


const upload = {
    
    async uploadCliente(req, res) {

        const { originalname: nome,  bytes: size, key, url =" " } = req.file;

        await SchemaUploadCliente.create({
            idCliente: req.userID,
            nome,
            key,
            size,
            url: url


        })

     return res.send({res:"ok"})
    }
}

module.exports = upload;