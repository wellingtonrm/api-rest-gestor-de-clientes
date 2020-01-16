const SchemaCliente       = require('../../../../models/schemaMongo/user');
const SchemaStatusUsuario = require('../../../../models/schemaMongo/statusUsuario')
const SchemaCodAtivacao   = require('../../../../models/schemaMongo/codAtivacao');
const EnviarEmail         = require('../../ativacao/enviarEmailCodAtivacao');
const gerarRadom          = require('../../../../config/geradorRadon')
const config              = require('../../../../config/')

const GravarUsuario = async function(email, body, calback){
    try {  

            if (await SchemaCliente.findOne({ email })) {

                calback(true, "Essa conta já existe");

            }else{

                 const Codigo = gerarRadom();
                        const dadosAtivacao = {
                            email: email,
                            codigo: Codigo
                        }

                EnviarEmail({
                    to: email,
                    codigo: Codigo

                }, async (err) => {
                        

                    if (err === false) {
                       
                        const {email, nomeCompleto, CPF, password, celular} = body;

                       await SchemaStatusUsuario.create({email});
                       await SchemaCodAtivacao.create(dadosAtivacao);
                       await SchemaCliente.create({ email, nomeCompleto, CPF, password, celular });
                       calback(false, "Registro com sucesso. Email enviado")
                       
                    } else {
                        console.log(err)

                        calback(true, "erro no envio do email" )
                        
                    }
                })

            }
        }catch(erro){
          
        calback(true, "Erro do Servidor, impossivel efetuar o registro")

        }
}
module.exports =  GravarUsuario;