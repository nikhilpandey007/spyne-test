const express = require('express');
const router = express.Router();
const {
    likeDiscussion,
    unlikeDiscussion,
} = require('../controllers/interactionController');

router.post('/like/:id', likeDiscussion);
router.post('/unlike/:id', unlikeDiscussion);

module.exports = router;
