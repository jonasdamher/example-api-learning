const router = require('express').Router();

const controller = require ('./users.controller');

router.get('/',controller.getAll);
router.get('/:id',controller.get);
router.post('/',controller.post);
router.patch('/:id',controller.patch);
router.delete('/:id',controller.deleteUser);

module.exports = router;