'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./../../Controllers/customerController');

router.post('/create', controller.post);


module.exports = router;