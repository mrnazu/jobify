const express = require('express');
const router = express.Router();

const {signin, signup} = require('../controllers/Auth');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;