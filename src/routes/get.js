const router         = require('express').Router();
const Error          = require('../controllers/error/error');
const requestToken      = require('../middleware/requestToken');


router.get('/',       Error.mensagemErrorRota);



module.exports = router