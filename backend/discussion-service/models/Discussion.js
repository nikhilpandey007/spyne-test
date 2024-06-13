const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: { type: String, required: true },
    image: { type: String },
    hashTags: { type: [String] },
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Discussion', discussionSchema);
