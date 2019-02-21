function page1() {
  location.reload();
}

function page2() {
  $(".grid-container").fadeOut();
  setTimeout(function() {
    $(".page2").fadeIn();
  }, 400);
}

function page3() {
  $(".page2").fadeOut();
  setTimeout(function() {
    $(".page3").fadeIn();
  }, 400);
}

function page4() {
  $(".page3").fadeOut();
  setTimeout(function() {
    $(".page4").fadeIn();
  }, 400);
}

function page5() {
  $(".page4").fadeOut();
  setTimeout(function() {
    $(".page5").fadeIn();
  }, 400);
}
