const express = require('express');
const sendError = require('./helpers/sendError');
const cors      = require('cors');
const routes    = require('./routes/router');
const rateLimit = require('./middleware/rateLimit');
const fileUpload = require('express-fileupload');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(sendError);
app.use(...rateLimit );
app.use(routes);
 
module.exports = app;

