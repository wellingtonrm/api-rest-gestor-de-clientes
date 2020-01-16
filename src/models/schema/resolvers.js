const TabelaUsuarioML         = require('../schemaMongo/usuarioML');

module.exports = {
    Query:{
       
        async AllUsuariosML(root, {_id}){

            if(_id === null){
                return await TabelaUsuarioML.find();
            }else{
                return await TabelaUsuarioML.find({_id});
            }
           
        }
        
    },
    Mutation:{
        async registerUsuarioML(_, {input}){
             const {email} = input;

            if (await TabelaUsuarioML.findOne({email})){
                return "essa conta ja existe"
            }
            const { _idcliente, iduser, nickname, firtname, lastname, emailml, indentificador, number, adress, city, state, zipcode, telefone} = input;
            await TabelaUsuarioML.create({
                _idcliente:"jjj",
                iduser,
                nickname,
                firtname,
                lastname,
                emailml,
                indentificador,
                number,
                adress,
                city,
                state,
                zipcode,
                telefone

            });
         return "Cadastrado com sucesso"
        }
    }
}
