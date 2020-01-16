const router                   = require('express').Router();
const { AuthenticacaoCliente } = require('../controllers/app/auth/authic');
const { addCliente }           = require('../controllers/app/cadastrar/usuarios/cliente');
const { uploadCliente }        = require('../controllers/app/cadastrar/usuarios/uploadCliente');
const  requestToken            = require('../middleware/requestToken');
const multer                   = require('multer');
const multerCliente            = require('../config/multer-cloud-cliente')



router.post('/auth/user', AuthenticacaoCliente);
router.post('/register/user', addCliente);
router.post('/vefic/cod/user', addCliente);
router.post('/upload/user', [requestToken, multerCliente.single('file'),  uploadCliente]);

module.exports = router