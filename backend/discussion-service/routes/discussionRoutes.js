const express = require('express');
const router = express.Router();
const {
    createDiscussion,
    updateDiscussion,
    deleteDiscussion,
    getDiscussionsByTags,
    searchDiscussions,
} = require('../controllers/discussionController');

router.post('/create', createDiscussion);
router.put('/update/:id', updateDiscussion);
router.delete('/delete/:id', deleteDiscussion);
router.get('/tags', getDiscussionsByTags);
router.get('/search', searchDiscussions);

module.exports = router;
