const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const discussionRoutes = require('./routes/discussionRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/discussionService');

app.use(bodyParser.json());
app.use('/discussions', discussionRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Discussion Service running on port ${PORT}`);
});

module.exports = app;
