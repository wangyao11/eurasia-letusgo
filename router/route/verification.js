'use strict';

var express = require('express');
var router = express.Router();

var verificationController = require('../../controller/verification');

router.get('/:id', verificationController.updateActive);

module.exports = router;