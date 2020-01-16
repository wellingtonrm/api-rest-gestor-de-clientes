const SchemaCliente = require('../../../models/schemaMongo/cliente');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config');
const VerificStatus = require('./verificStatus');
const enviarEmail = require('../ativacao/enviarEmailCodAtivacao')
const UpdateCodigo = require('./updateCodigo')


const VerificaUsuario = async (email, password, calback) => {

    const user = await SchemaCliente.findOne({ email }).select('+password');
    if (!user) {

        calback(true, "Esse usuario não existe")

    } else if (!await bcrypt.compare(password, user.password)) {

        calback(true, "Dados incorretos")

    } else {
        VerificStatus(email, (erro, infostatus, nivel) => {
            if (!erro) {

                if (infostatus === 'pendente') {
                    UpdateCodigo(email, (erro, info, codigo) => {
                        if (!erro) {
                            if (info === 'update') {

                                enviarEmail({
                                    to: email,
                                    codigo: codigo
                                }, (err) => {

                                    if (!err) {

                                        calback(false, "a sua conta ainda não estar ativa. Enviamos o código de ativação para seu email", "", "", "pendente")
                                    } else {

                                        calback(true, "Erro ao enviar email com código, tente novamente")
                                    }


                                })

                            } 

                        } else {
                            calback(true, "Erro ao atualizar o código")
                        }
                    })

                } else if (infostatus === 'ativo'){

                    const token = jwt.sign({ id: user.id }, config.secret.hash, {
                        expiresIn: 86400,
                    })
                    calback(false, "Logado com sucesso", token, nivel, "ativo")


                }

            }
        })
    }
}
    module.exports = VerificaUsuario;