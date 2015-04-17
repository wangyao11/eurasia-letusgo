'use strict';
var $ = require('jquery');
require('github/ziyiking/Semantic-UI@master/dist/semantic');

$(function () {

  $('#login').on('click', function () {

    $('.userLogin')
      .modal('show');
    $('#loginResult').html('');
  });

  $('#userLogin').on('click', function () {

    var userName = $('#user-name-login').val();
    var password = $('#password-login').val();

    $.post('/api/user/login', {username: userName, password: password}, function (data) {

      if(data.user) {

        $('#isUserName').html(data.user.name);
        showMessage(data.message);
        $('#Tip').fadeOut(5000);
      } else {
        $('#loginResult').html(data.message);
        return false;
      }
    });
  });

  $('#confirm').on('click', function () {
    $('.LoginFailure').hide();
    $('.userLogin').modal('show');
  });
});

