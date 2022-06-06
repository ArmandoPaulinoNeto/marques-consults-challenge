const router = require('express').Router();
const requireController = require('./controller/requireController');

router.get('/all', requireController.all);
router.get('/search/:words', requireController.search);

module.exports = router;