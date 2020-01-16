const GravandoUsuario = require('./gravarStatusUsuario');


const addUser = async (req, res) => {

        const { email } = req.body;
        GravandoUsuario(email, req.body, (erro, info)=>{

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

module.exports = addUser;