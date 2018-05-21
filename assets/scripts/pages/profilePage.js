$(document).ready(function () {
  var currentUser = null;
  var $datePicker = $("#datepicker");
  var $eventNameField = $('#eventNameField');
  var $eventAddressField = $('#eventAddressField');
  
  $datePicker.datepicker();
  
  function getCurrentUser() {
    return $.get('/api/currentUser');
  }

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });  

  $('#createEngagementBtn').click(function () {
    var engagementDate = $datePicker.val();
    var eventName = $eventNameField.val();
    var eventAddress = $eventAddressField.val();

    // getting pet id based on page URL
    var url = location.href;
    var petId = url.substring(url.lastIndexOf('/') + 1);
    petId = parseInt(petId);

    // create the engagement
    getCurrentUser().then(function (currentUserData) {
      var newEngagement = {
        name: eventName,
        date: engagementDate,
        address: eventAddress,
        UserId: currentUserData.id,
        PetId: petId
      };

      engagementService.create(newEngagement).then(function (engagement) {
        console.log(engagement);
      });
    });
  });
});