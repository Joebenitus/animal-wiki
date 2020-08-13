$(document).ready(function(){

  $("button#snakeButton").click(function(event) {
    event.preventDefault();
    $(".snake-info").show();
    $(".turtle-info").hide();
    $(".bee-info").hide();
  });

  $("button#turtleButton").click(function(event) {
    event.preventDefault();
    $(".turtle-info").show();
    $(".snake-info").hide();
    $(".bee-info").hide();
  });

  $("button#beeButton").click(function(event) {
    event.preventDefault();
    $(".bee-info").show();
    $(".turtle-info").hide();
    $(".snake-info").hide();
  });
});