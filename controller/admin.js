'use strict';

var _ = require('lodash');

var User = require('../model/user');

var getAdminIndexInfo = function(req, res) {

  res.render('adminIndex', {currentAdminName: req.session.currentAdminName});
};

module.exports = {
  getAdminIndexInfo: getAdminIndexInfo
};
