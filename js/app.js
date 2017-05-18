$(document).ready(function() {
  // sanity check
  console.log(".js is linked!")

  let d = $("img#putin");
  let m = $("img#trump");

  let endGame = false;


  $("body").on("keypress", moveRight)

  function moveRight(el) {
    let keyPress = el.charCode
    let maxWidth = $(window).width();
    if (endGame === false) {
      if (keyPress === 32) {
        $("#putin").animate({
          left: "+=100"
        }, 100);
        if (d.position().left >= maxWidth - 370) {
          $(d).stop();
          $("h1").text("Putin Wins")
          $(".game-board").append(`<h1 style="color:white">The world is destroyed!</h1>`)
          endGame = true
          return false;
        }
      } else if (keyPress === 13) {
        $("#trump").animate({
          left: "+=100"
        }, 100);
        if (m.position().left >= maxWidth - 370) {
          $(m).stop();
          $("h1").text("Trump Wins")
          $(".game-board").append(`<h1 style="color:white">The world is destroyed!</h1>`)
          endGame = true;
          return false;
        }
      }
    }
  };

  $(".btn").click(function() {
    document.location.reload();
  });









});
