const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({
            CodHTTP: 401,
            Erro: true,
            Reponse: "Token não foi informado"

        });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({
            CodHTTP: 401,
            Erro: true,
            Reponse: "Token errado"

        });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))

        return res.status(401).send({
            CodHTTP: 401,
            Erro: true,
            Reponse: "Token mal formado"

        });

    jwt.verify(token, config.secret.hash, (err, decoded)=>{
        if(err) 
            return res.status(401).send({
                CodHTTP: 401,
                Erro: true,
                Reponse: "Token inválido"

            });

         req.userID = decoded.id;
         return next();
    })
};