'use strict';

var express = require('express');
var router = express.Router();

var sessionController = require('../../controller/session');

router.post('/', sessionController.login);
router.delete('/:userName', sessionController.logout);

module.exports = router;
