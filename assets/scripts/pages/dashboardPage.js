var currentUser = require('../../../../app/config/currentUser.js');

(function ($) {
    'use strict';

    function createPet(pet) {
      return $.ajax({
        type: 'POST',
        url: '/api/pet',
        data: pet
      })
    }

    $('#addPetBtn').click(function () {
        console.log('inside click event');
        $('#addPetModal').addClass('is-active');

    }); 

    $('#cancel').click( () => {
      //event.preventDefault();
      $('#addPetModal').removeClass('is-active');
    });

    $('#save').click( () => {
      //event.preventDefault();
      var pet = {
        name: $('#namefield').val().trim(),
        type: $('#typefield').val().trim(),
        breed: $('#breedfield').val().trim(),
        about: $('#aboutfield').val().trim(),
        UserId: currentUser.UserId
      };
      createPet(pet).done((data) => {
        console.log(data);
      });
      $('#addPetModal').removeClass('is-active');

    });

})($);