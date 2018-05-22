var petsService = (function ($) {
  'use strict';
  
  return {
    getAll: function () {
      return $.get("/api/pet");
    },

    getAllWithUser: function () {
      return $.get("/api/pet/user");
    },

    getById: function (id) {
      return $.get('/api/pet/' + id);
    }
  }; 
})($);