const RecebeCod = require('./recebeCodigo');


const VerificCod = {
    async AtivarContaCliente(req, res) {

       const {codigo} = req.body;

        RecebeCod(codigo, async (erro, info) => {
        if(!erro){

            res.status(200).send({
                        CodHTTP: 200,
                        Erro: false,
                        Response: info

                    });
        }else{
           
            res.status(400).send({
                CodHTTP: 400,
                Erro: true,
                Response: info

            });


        }
        })


     }
}
module.exports = VerificCod;