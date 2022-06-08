const router = require('express').Router();
const requireController = require('./controller/requireController');

router.get('/artists', requireController.artists);
router.get('/artists/search/:words', requireController.artistsSearch);
router.get('/artists/:id', requireController.findArtists);

router.get('/agents', requireController.agents);
router.get('/agents/:id', requireController.findAgents);

module.exports = router;