"use strict";
$(document).ready(function () {

  if ($(window).width() > 960) {
    //iedvesmas stāsti
    for (let index = 21; index < 100; index++) {
      $(".stasti-gallery").append(
        '<div class="col-6 col-md-3 d-none col-lg-2"><img class="img-fluid" src="./img/iedvesmas-stasti/background.jpg" alt=""><p class="number">' +
          index +
          "</p></div>"
      );
    }
    $(".navbar").removeClass("fixed-top");
  } else {
    $(".navbar").addClass("fixed-top");
  }

  //viem more blocks
  $("#view-more").click(function () {
    for (let index = 21; index < 100; index++) {
      $(".stasti-gallery").append(
        '<div class="col-6 col-md-3 col-lg-2"><img class="img-fluid" src="./img/iedvesmas-stasti/background.jpg" alt=""><p class="number">' +
          index +
          "</p></div>"
      );
    }
    $(this).remove();
  });

  
  let toggle = true;
  //adding icon to toggler

  $(".navbar-toggler").click(function () {
    if (toggle) {
      $(".navbar-light .navbar-toggler-icon").css(
        "background-image",
        'url("../img/mobile/close-btn.svg")'
      );
      toggle = false;
    } else {
      $(".navbar-light .navbar-toggler-icon").css(
        "background-image",
        'url("../img/mobile/menu-toggler.svg")'
      );
      toggle = true;
    }
  });
});