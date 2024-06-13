const User = require('../models/User');

const createUser = async (req, res) => {
    const { name, mobileNo, email } = req.body;

    try {
        const user = new User({ name, mobileNo, email });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', error });
    }
};

const searchUsers = async (req, res) => {
    const { name } = req.query;

    try {
        const users = await User.find({
            name: { $regex: name, $options: 'i' },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error searching users', error });
    }
};

module.exports = { createUser, updateUser, deleteUser, getUsers, searchUsers };
