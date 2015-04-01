'use strict';
var $ = require('jquery');
require('semantic-ui');


$(document).ready(function () {

  $('.delete_cartItem').on('click', function (event) {
    var id = this.closest('td').id;
    console.log(id);
    $.ajax({
      url: 'cart/' + id,
      type: 'DELETE',
      success: function(data) {
        console.log(data);
        $.this.closest('td').remove();
      }
    })
  })
});


