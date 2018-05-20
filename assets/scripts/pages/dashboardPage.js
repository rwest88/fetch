(function ($) {
    'use strict';

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
      $('#addPetModal').removeClass('is-active');
      
    });

})($);