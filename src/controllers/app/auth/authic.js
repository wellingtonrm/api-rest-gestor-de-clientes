const VerificUser = require('./verificUser');

const AuthCliente = {
    async AuthenticacaoCliente(req, res) {

        const { email, password } = req.body;
        VerificUser(email, password, (erro, info, token, nivel, status)=>{
          
          if(!erro){
            

                const tokens = token
                res.status(200).json({
               
                Erro: false,
                nivel:nivel,
                status:status,
                token:tokens,
                Response: info
            });
              
          }else{

          res.status(400).send({
                
                Erro: true,
                Response: info

            });

          }
            
        })

    }
}
module.exports = AuthCliente;