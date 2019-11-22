const express = require('express');
const router = express.Router();
const post = require('./v1/post');

router.use('/v1/post', post);

module.exports = router;
