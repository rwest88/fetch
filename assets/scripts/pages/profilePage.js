$(document).ready(function () {
  
  
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