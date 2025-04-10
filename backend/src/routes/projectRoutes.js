const express = require('express');
const router = express.Router();

// GET ALL PROJECTS
router.get('/projects', (req, res) => {
    // Logic to fetch all projects from the database
    res.send('List of projects');
});

// GET ONE PROJECT BY ID
router.get('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    // Logic to fetch a project by ID from the database
    res.send(`Project details for ID: ${projectId}`);
});

// POST ONE PROJECT
router.post('/projects', (req, res) => {
    // Logic to create a new project
    res.send('Project created!');
});

// PUT ONE PROJECT BY ID
router.put('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    // Logic to update a project by ID
    res.send(`Project with ID: ${projectId} updated!`);
});

// DELETE ONE PROJECT BY ID
router.delete('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    // Logic to delete a project by ID
    res.send(`Project with ID: ${projectId} deleted!`);
});

module.exports = router;