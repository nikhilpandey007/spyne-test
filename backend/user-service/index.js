const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/userService');

app.use(bodyParser.json());
app.use('/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});

module.exports = app;
