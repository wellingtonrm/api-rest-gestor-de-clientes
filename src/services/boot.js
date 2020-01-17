
const config =  require('../config');
const app = require('../app');
const http = require('http');

const Server = http.Server(app);
const io = require('socket.io')(Server);
  
module.exports = (err)=>{
    //console.clear();
    if(err){
    return console.log("Erro ao cenctar no banco");
    }
    Server.listen(config.app.port, (err) => {
        if (err) {
            console.log("Servidor com Erro ao iniciar")
        }
        console.log(`Servidor rodando na porta ${config.app.port}`)
    });  
}
