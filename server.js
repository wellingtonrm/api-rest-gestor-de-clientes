require('dotenv').config();
const boot = require('./src/services/boot');
const config = require('./src/config');
const ConectMongo = require('./src/database/mongo');



if (config.db.producao === 'false') {

    ConectMongo.connect(config.db.hostLocal, (error) => {

        if (error) {
            console.log(error)
        } else {
            console.log('Connect MongoDB Localhost')
            boot();
        }
    })



} else {
    ConectMongo.connect(config.db.stringConect, (error) => {

        if (error) {
            console.log('error')
        } else {
            console.log('Connect MongoDB Produção')

            boot();
        }
    })


}



