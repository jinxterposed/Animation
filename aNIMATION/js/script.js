$(document).ready(function () {
  // variables
  $surface = $("surface");
  $car = $("car");

  //keypress events
  $(document).on("keypress", function (e) {
    if (e.key == 13) {
      $($surface).toggleClass("moveRight");
    }
  });
});
