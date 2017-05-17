$(document).ready(function() {
  // sanity check
  console.log(".js is linked!")


  $("body").on("keypress", moveRight)

  function moveRight(el) {
    var keyPress = el.charCode

    if (keyPress === 32) {
    $("#delorean").animate({
      left: "+=75"
    }, 1000);
  } else if (keyPress === 13) {
    $("#mcqueen").animate({
      left: "+=75"
    }, 1000);
  }

}







});
