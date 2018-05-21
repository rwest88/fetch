var engagementService = (function ($) {
    'use strict';
    
    return {
      getAll: function () {
        return $.get("/api/engagement");
      }, 

      create: function (data) {
        return $.ajax({
          method: 'POST',
          url: '/api/engagement',
          body: data
        });
      }
    };
  })($);