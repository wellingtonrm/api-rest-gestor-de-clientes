const SchemaStatusUsuario = require('../../../models/schemaMongo/statusUsuario');

const VerificStatus = async function (email, calback) {
    try {
        const tabelaCodigo = await SchemaStatusUsuario.find({ email }).lean().exec();
        const { status, nivel } = tabelaCodigo[0];

        calback(false, status, nivel)

    } catch (erro) {

        calback(true, "Erro ao verificar status da conta de usuario")
    }

}
module.exports = VerificStatus;