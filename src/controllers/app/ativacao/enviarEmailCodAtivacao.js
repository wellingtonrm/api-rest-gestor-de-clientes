const mailer = require('nodemailer');

const EnviarEmail = function({to, codigo}, calback){

    const conf = require('../../../config') 

   const config =  mailer.createTransport({
        service: 'gmail',
        port: 25,  
        auth: { 
            user: conf.gmail.email,
            pass: conf.gmail.pass
        },
    })
    
    const ConfigMenssage = {
        from: conf.gmail.email,
        to: to,
        subject: "Código de ativação",
        text: "Obrigado pelo seu cadastro. O seu código de ativação é " + codigo

    }
config.sendMail(ConfigMenssage, (erro, info) => {
        if (erro) {
         calback(true)
        } else {

            calback(false)
        }

     
    })
 
}


module.exports = EnviarEmail;



