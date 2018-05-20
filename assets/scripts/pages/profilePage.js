$(document).ready(function () {
  
  function createPet() {
    console.log('inside create pet method...');
    console.log('write post request code to /api/pet here...');
    console.log('have this method return the promise from the jquery POST');
  }

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });

  $("#createEngagementButton").on("click", function(){
    $("#addEngagementModal").addClass("is-active");
  });
  
  $("#close-button").on("click", function(){
    //console.log("create engagement button clicked");
    $("#addEngagementModal").removeClass("is-active");
  });
});