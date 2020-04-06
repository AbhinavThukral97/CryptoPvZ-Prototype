var stage = 1;

function evolve() {
  $(".light").css("background", "rgba(217, 194, 74, 0.8)");
  $(".light").css("height", "250px");
  $(".light").css("width", "250px");
  setTimeout(() => {
    $(".light").css("background", "rgba(217, 194, 74, 0.25)");
    $(".light").css("height", "50px");
    $(".light").css("width", "50px");
  }, 2000);
  setTimeout(() => {
    if (stage == 0) {
      $(".seed-inner").css("transform", "scale(1)");
      $(".head-inner").css("transform", "scale(0)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(0)");
      $(".eyes").css("transform", "scale(0)");
      $(".body").css("transform", "scale(0)");
      $(".leaves-front").css("transform", "scale(0)");
      $(".leaves-back").css("transform", "scale(0)");
      $(".glow").css("height", "200px");
      $(".glow").css("width", "200px");
    } else if (stage == 1) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(0)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(0)");
      $(".eyes").css("transform", "scale(0)");
      $(".body").css("transform", "scale(0)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "250px");
      $(".glow").css("width", "250px");
    } else if (stage == 2) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(0)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(0)");
      $(".eyes").css("transform", "scale(0)");
      $(".body").css("transform", "scale(1)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "300px");
      $(".glow").css("width", "300px");
    } else if (stage == 3) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(1)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(0)");
      $(".eyes").css("transform", "scale(0)");
      $(".body").css("transform", "scale(1)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "350px");
      $(".glow").css("width", "350px");
    } else if (stage == 4) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(1)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(0)");
      $(".eyes").css("transform", "scale(1)");
      $(".body").css("transform", "scale(1)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "400px");
      $(".glow").css("width", "400px");
    } else if (stage == 5) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(1)");
      $(".spark").css("transform", "scale(0)");
      $(".hair").css("transform", "scale(1)");
      $(".eyes").css("transform", "scale(1)");
      $(".body").css("transform", "scale(1)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "450px");
      $(".glow").css("width", "450px");
    } else if (stage == 6) {
      $(".seed-inner").css("transform", "scale(0)");
      $(".head-inner").css("transform", "scale(1)");
      $(".spark").css("transform", "scale(1)");
      $(".hair").css("transform", "scale(1)");
      $(".eyes").css("transform", "scale(1)");
      $(".body").css("transform", "scale(1)");
      $(".leaves-front").css("transform", "scale(1)");
      $(".leaves-back").css("transform", "scale(1)");
      $(".glow").css("height", "450px");
      $(".glow").css("width", "450px");
      $(".button-wrapper button").css("transform", "scale(0)");
    } else {
      return;
    }
    stage++;
  }, 1000);
}

$(document).ready(function () {
  $(".button-wrapper button").click(function () {
    evolve();
  });
});
