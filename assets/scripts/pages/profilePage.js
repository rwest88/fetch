$(document).ready(function () {
  var currentUser = null;
  var $datePicker = $("#datepicker");
  $datePicker.datepicker();

  function getCurrentUser() {
    return $.get('/api/currentUser');
  }

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });  

  $('#createEngagementBtn').click(function () {
    var engagementDate = $datePicker.val();

    getCurrentUser().then(function () {
      
    });
  });
});