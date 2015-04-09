var express = require('express');
var router = express.Router();
var Indent = require('../../model/indent.js');
var Item = require('../../model/item.js');
var CartItem = require('../../model/cartItem.js');
var User = require('../../model/user.js');
var _ = require('lodash');

router.get('/', function (req, res) {

  Indent.findById('551fd16975cd55ed0cfa5503')
    .populate('cartItems')
    .exec(function (err, indent) {

      CartItem.find()
        .populate('item')
        .exec(function (err, cartItems) {

          cartItems.forEach(function (cartItem) {
            if (cartItem.item.name.length > 8) {
              cartItem.item.shortName = cartItem.item.name.substring(0, 8) + '..';
            } else {
              cartItem.item.shortName = cartItem.item.name;
            }
          });

          var total = indent.getTotal(cartItems);
          res.render('indent', {cartItems: cartItems, total: total, indent: indent});
        });
    });
});

module.exports = router;