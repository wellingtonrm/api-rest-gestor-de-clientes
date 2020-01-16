const dotenv = require('dotenv');
dotenv.config()
module.exports = {
    secret:{
        hash: "4fa8bb4b6275e8801df986259a5b57a0"
    },
    app:{
        port: process.env.PORT || 4000,

    },
    db:{
        stringConect: process.env.MONGO_DB,
        producao: process.env.PRODUCAO,
        hostLocal: process.env.MONGOLOCAL,
       
    },
    
    requests:{
        rateLimit:{
            window: 5 * 60 * 1000, // 5 minutos
            max: 200,
            mensagem:"Limite de requisições excedidas, aguarde 5 minutos e tente de novo"

        },
        slowDown:{
            window: 4 * 60 * 1000, // 4 minutos
            delayAfter:200, // aplicar apartir de 200 request
            delayMs: 200 // acrescentar 50ms
        }
    },
    cdn:{
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET
    }, 
    gmail:{
        from: process.env.GMAIL_FROM,
        email: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    } 

}