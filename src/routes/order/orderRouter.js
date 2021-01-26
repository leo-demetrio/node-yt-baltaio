'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./../../Controllers/orderController');



router.get('/', controller.get);
router.post('/', controller.post);



module.exports = router;