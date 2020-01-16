const router                   = require('express').Router();
const { AuthenticacaoCliente } = require('../controllers/app/auth/authic');
const  addUser                 = require('../controllers/app/cadastrar/usuarios/user');
const addCliente               = require('../controllers/cliente/addCliente')
const { uploadCliente }        = require('../controllers/app/cadastrar/usuarios/uploadCliente');
const  requestToken            = require('../middleware/requestToken');
const multer                   = require('multer');
const multerCliente            = require('../config/multer-cloud-cliente')



router.post('/auth/user', AuthenticacaoCliente);
router.post('/register/user', addUser);
router.post('/vefic/cod/user', addUser);
router.post('/cliente', [requestToken , addCliente]);
router.post('/upload/user', [requestToken, multerCliente.single('file'),  uploadCliente]);

module.exports = router; 