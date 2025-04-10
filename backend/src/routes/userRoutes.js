const express = require('express');
const router = express.Router();

// GET ALL USERS
router.get('/users', (req, res) => {
    // Logic to fetch all users from the database
    res.send('List of users');
});

// GET USER BY ID
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to fetch user by ID from the database
    res.send(`User details for ID: ${userId}`);
});

// POST USER
router.post('/users', (req, res) => {
    // Logic to create a new user
    res.send('User created!');
});

// PUT USER BY ID
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to update user by ID
    res.send(`User with ID: ${userId} updated!`);
});

// DELETE USER BY ID
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to delete user by ID
    res.send(`User with ID: ${userId} deleted!`);
});