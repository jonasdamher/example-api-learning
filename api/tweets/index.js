const router = require('express').Router();

const controller = require ('./tweets.controller');

router.get('/',controller.getAll);
router.get('/:id',controller.get);
router.post('/',controller.post);
router.patch('/:id',controller.patch);
router.delete('/:id',controller.deleteTweet);

module.exports = router;