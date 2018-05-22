$(document).ready(function () {
  var currentUser = null;
  var $datePicker = $("#datepicker");
  var $eventNameField = $('#eventNameField');
  var $eventAddressField = $('#eventAddressField');
  var petId = null;

  $datePicker.datepicker();
  
  function getCurrentUser() {
    return $.get('/api/currentUser');
  }

  function getIdFromRoute() {
    var url = location.href;
    var petId = url.substring(url.lastIndexOf('/') + 1);
    return parseInt(petId);
  }

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });  

  $('#createEngagementBtn').click(function () {
    var engagementDate = $datePicker.val();
    var eventName = $eventNameField.val();
    var eventAddress = $eventAddressField.val();

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

      window.location.href = '../../dashboard';
    });
  });

  function init() {
    petId = getIdFromRoute();
    petsService.getById(petId).then(function (petData) {
      $('#petAbout').text(petData.about);
      $('#petName').text(petData.name);
      $('#petTypeHeader').text(petData.type);
      $('#petBreedHeader').text(petData.breed);
    });
  }

  init();
});