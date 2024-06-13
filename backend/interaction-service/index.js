const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const interactionRoutes = require('./routes/interactionRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/interactionService');

app.use(bodyParser.json());
app.use('/interactions', interactionRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Interaction Service running on port ${PORT}`);
});

module.exports = app;
