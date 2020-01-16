const router = require('express').Router();
const { AtivarContaCliente } = require('../controllers/app/ativacao/updateStatus');

router.put('/ativacao', AtivarContaCliente);

module.exports = router;