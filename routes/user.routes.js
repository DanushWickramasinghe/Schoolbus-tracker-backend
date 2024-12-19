const express = require('express');
const router = express.Router();
const { helloToUser } = require('../controllers/user.controller');

// POST route to register a user
router.get('/hello', helloToUser);

module.exports = router;