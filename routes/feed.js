const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/fake-data', feedController.getFakeData);

// POST /feed/post
// router.post('/post', feedController.createPost);

module.exports = router;