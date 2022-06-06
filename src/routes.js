const router = require('express').Router();
const requireController = require('./controller/requireController');

router.get('/all', requireController.all);
router.get('/search/:words', requireController.search);

router.get('/agents', requireController.agents);
router.get('/agents/:id', requireController.findAgent);

module.exports = router;