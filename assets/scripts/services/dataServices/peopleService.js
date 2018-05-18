var peopleService = (function () {
  'use strict';
  
  return {
    getAll: function () {
      return $.get("/api/user");
    }
  };
})();