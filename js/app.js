$(document).ready(function() {
  // sanity check
  console.log(".js is linked!")

  let d = $("img#delorean");
  let m = $("img#mcqueen");

  let endGame = false;


  $("body").on("keypress", moveRight)

  function moveRight(el) {
    let keyPress = el.charCode
    let maxWidth = $(window).width();
    if (endGame === false) {
      if (keyPress === 32) {
        $("#delorean").animate({
          left: "+=100"
        }, 100);
        if (d.position().left >= maxWidth - 400) {
          $(d).stop();
          $("h1").text("Marty Wins")
          endGame = true
          return false;
        }
      } else if (keyPress === 13) {
        $("#mcqueen").animate({
          left: "+=100"
        }, 100);
        if (m.position().left >= maxWidth - 400) {
          $(m).stop();
          $("h1").text("McQueen Wins")
          endGame = true;
          return false;
        }
      }
    }
    console.log(d.position().left)
    console.log(m.position().left)
  };

  $(".btn").click(function(){
    document.location.reload();
  });









});
