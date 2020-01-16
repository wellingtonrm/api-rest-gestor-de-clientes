const logger = require('../services/logger');
const ip     = require('ip');
const adress = ip.address()
module.exports = (req, res, next)=>{
   res.sendError = function(mensagem, status = 400){
       logger.error({
           mensagem,
           status,
           adress
       });
        return this
        .status(status)
        .send({mensagem})
      
    }
   
    next();
}