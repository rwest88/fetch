$(document).ready(function () {
  

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });

  $("#createEngagementButton").on("click", function(){
    console.log("create engaement button clicked");
    $("#addEngagementModal").addClass("is-active");
  });
});