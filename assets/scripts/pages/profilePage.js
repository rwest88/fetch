$(document).ready(function () {
  'use strict';

  $('#calendar').fullCalendar({
    // put your calendar options and callbacks here
  });

  $("#createEngagementButton").on("click", function(){
    console.log("create engaement button clicked");

    $("#people").click(function () {
      $("#people-modal").addClass("is-active");
    });

  });
});