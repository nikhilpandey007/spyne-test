const Discussion = require('../../discussion-service/models/Discussion');

const likeDiscussion = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;
    try {
        let discussion = await Discussion.findById(id);

        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        if (discussion.likes.includes(userId)) {
            return res
                .status(400)
                .json({ message: 'You have already liked this discussion' });
        }

        discussion.likes.push(userId);
        await discussion.save();

        res.status(200).json({ message: 'Discussion liked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error liking discussion', error });
    }
};

const unlikeDiscussion = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    try {
        let discussion = await Discussion.findById(id);

        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        if (!discussion.likes.includes(userId)) {
            return res
                .status(400)
                .json({ message: 'You have not liked this discussion' });
        }

        discussion.likes = discussion.likes.filter((like) => like !== userId);
        await discussion.save();

        res.status(200).json({ message: 'Discussion unliked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error unliking discussion', error });
    }
};

module.exports = { likeDiscussion, unlikeDiscussion };
