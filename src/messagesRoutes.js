//Création d'un router express
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

//Routes Tchat
router.get('/', controller.getMessages);
router.post('/', controller.addMessage);

module.exports = router;