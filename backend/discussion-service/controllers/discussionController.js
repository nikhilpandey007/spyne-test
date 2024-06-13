const Discussion = require('../models/Discussion');

const createDiscussion = async (req, res) => {
    const { userId, text, image, hashTags } = req.body;

    try {
        const discussion = new Discussion({ userId, text, image, hashTags });
        await discussion.save();
        res.status(201).json({
            message: 'Discussion created successfully',
            discussion,
        });
    } catch (error) {
        res.status(400).json({ message: 'Error creating discussion', error });
    }
};

const updateDiscussion = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const discussion = await Discussion.findByIdAndUpdate(id, updates, {
            new: true,
        });
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        res.status(200).json({
            message: 'Discussion updated successfully',
            discussion,
        });
    } catch (error) {
        res.status(400).json({ message: 'Error updating discussion', error });
    }
};

const deleteDiscussion = async (req, res) => {
    const { id } = req.params;

    try {
        const discussion = await Discussion.findByIdAndDelete(id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        res.status(200).json({ message: 'Discussion deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting discussion', error });
    }
};

const getDiscussionsByTags = async (req, res) => {
    const { tags } = req.query;

    try {
        const discussions = await Discussion.find({
            hashTags: { $in: tags.split(',') },
        });
        res.status(200).json(discussions);
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching discussions by tags',
            error,
        });
    }
};

const searchDiscussions = async (req, res) => {
    const { searchText } = req.query;

    try {
        const discussions = await Discussion.find({
            $text: { $search: searchText },
        });
        res.status(200).json(discussions);
    } catch (error) {
        res.status(400).json({ message: 'Error searching discussions', error });
    }
};

module.exports = {
    createDiscussion,
    updateDiscussion,
    deleteDiscussion,
    getDiscussionsByTags,
    searchDiscussions,
};
