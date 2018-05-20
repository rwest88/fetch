(function ($) {
    'use strict';

    $('#addPetBtn').click(function () {
        console.log('inside click event');
        $('#addPetModal').addClass('is-active');
    }); 
})($);