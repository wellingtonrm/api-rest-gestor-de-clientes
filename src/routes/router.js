const  express      = require('express');
const post          = require('./post');
const get           = require('./get');
const put           = require('./put');
const app  = express();


app.use(put);
app.use(get);
app.use(post); 


       
module.exports =  app;