const SchemaCodAtivacao = require('../../../models/schemaMongo/codAtivacao');
const SchemaStatusUsuario = require('../../../models/schemaMongo/statusUsuario');
const RecebeCod = async function(codigo, callback){

    try{

        const tabelaCodigo = await SchemaCodAtivacao.find({ codigo }).distinct('email').lean().exec();
        const email = tabelaCodigo[0];

        if(!email){
            callback(true, "Código incorreto")
        }else{

            const status = await SchemaStatusUsuario.find({ email }).distinct('status').lean().exec();
            const arrayStatus = status[0];
            if (arrayStatus === 'ativo'){

               callback(true, "Essa conta ja estar ativa")

           }else{
              
               await SchemaStatusUsuario.updateOne({ email: email }, { status: 'ativo' })

               callback(false, "A sua consta foi ativada com sucesso")
           }

        }

        

       

    }catch(erro){

        callback(true, "Erro para ativar a sua conta")



    }
       
   

      
}
module.exports = RecebeCod;