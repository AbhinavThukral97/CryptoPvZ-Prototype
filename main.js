var canShoot = true;

function shootBall() {
  if (canShoot) {
    canShoot = false;
    $(".upper-body").css("animation", "none");
    setTimeout(function () {
      $(".upper-body").css("transform", "rotate(-10deg)");
      $(".shooter-ball").css("transform", "scale(1)");
    }, 50);
    setTimeout(function () {
      $(".upper-body").css("transform", "rotate(5deg)");
      $(".shooter-ball img").animate({ left: "100vw" }, 1000);
    }, 800);
    setTimeout(function () {
      $(".upper-body").css("transform", "rotate(-5deg)");
      $(".upper-body").css("animation", "sway 3s infinite");
      $(".shooter-ball").css("opacity", "0");
    }, 1800);
    setTimeout(function () {
      $(".shooter-ball").css("transform", "scale(0)");
      $(".shooter-ball img").css("left", "0%");
    }, 2300);
    setTimeout(function () {
      $(".shooter-ball").css("opacity", "1");
      canShoot = true;
    }, 2800);
  }
}

$(document).ready(function () {
  $(".tab.evolve").click(function () {
    $(".tab").removeClass("current");
    $(this).addClass("current");
    evolve(0);
    $(".button-wrapper button").css("transform", "scale(1)");
    $(".button-wrapper button").html("Evolve");
    $(".text-wrapper").css("opacity", "1");
    $(".upper-body").css("animation", "none");
    $(".shooter-ball").css("transform", "scale(0)");
    buttonState = "evolve";
  });
  $(".tab.idle").click(function () {
    $(".tab").removeClass("current");
    $(this).addClass("current");
    evolve();
    $(".shooter-ball").css("transform", "scale(0)");
    $(".text-wrapper").css("opacity", "0");
    $(".upper-body").css("animation", "sway 3s infinite");
  });
  $(".tab.shooter").click(function () {
    $(".tab").removeClass("current");
    $(".text-wrapper").css("opacity", "0");
    $(this).addClass("current");
    evolve();
    setTimeout(function () {
      buttonState = "shoot";
      $(".button-wrapper button").css("transform", "scale(1)");
      $(".shooter-ball").css("transform", "scale(0)");
      $(".button-wrapper button").html("Shoot");
      $(".upper-body").css("animation", "sway 3s infinite");
    }, 2000);
  });

  $(window).keyup(function (e) {
    if (e.keyCode == 32) {
      shootBall();
    }
  });
});
