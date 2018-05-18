var peopleService = (function ($) {
  'use strict';
  
  return {
    getAll: function () {
      return $.get("/api/user");
    },

    getByPetId: function (petId) {
      return $.get("/api/user/pet/:petId");
    }
  };
})($);