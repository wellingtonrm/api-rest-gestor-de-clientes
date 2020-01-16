const router                   = require('express').Router();
const { AuthenticacaoCliente } = require('../controllers/app/auth/authic');
const { addCliente }           = require('../controllers/app/cadastrar/usuarios/cliente');
const { uploadCliente }        = require('../controllers/app/cadastrar/usuarios/uploadCliente');
const  requestToken            = require('../middleware/requestToken');
const multer                   = require('multer');
const multerCliente            = require('../config/multer-cloud-cliente')



router.post('/auth/cliente', AuthenticacaoCliente);
router.post('/register/cliente', addCliente);
router.post('/vefic/cod/cliente', addCliente);
router.post('/upload/cliente', [requestToken, multerCliente.single('file'),  uploadCliente]);

module.exports = router