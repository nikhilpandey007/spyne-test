const express = require('express');
const router = express.Router();
const {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    searchUsers,
} = require('../controllers/userController');

router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/list', getUsers);
router.get('/search', searchUsers);

module.exports = router;
