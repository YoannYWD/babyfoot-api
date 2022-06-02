//Création d'un router express
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

//Routes Games
router.get('/', controller.getGames);
router.get('/:id', controller.getGameById);
router.post('/', controller.addGame);
router.put('/:id', controller.updateGame);
router.delete('/:id', controller.deleteGame);

module.exports = router;