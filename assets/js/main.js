"use strict";

/* Hero section my slider */
$(document).ready(function () {
  $(".my-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    fade: true,
  });

  /* Team member slider */

  $(".team-member-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Projects section slider */

  $(".my-portfolio-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Testimonial section slider */

  $(".testimonial-slider-nav").slick({
    dots: true,
    infinite: true,
    speed: 300,
    asNavFor: ".testimonial-slider-for",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  });

  $(".testimonial-slider-for").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testimonial-slider-nav",
    adaptiveHeight: true,
    focusOnSelect: true,
  });

  /* Mobile nav toggle */

  $("#nav-lines").click(function () {
    $(".mobile-nav, .mobile-nav-overlay").addClass("active");
  });

  $(".close-nav").click(function () {
    $(".mobile-nav, .mobile-nav-overlay").removeClass("active");
  });

  $(".has-dropdown").click(function () {
    $(".dropdown-arrow").addClass("open");
  });

  function openMenu() {
    var x = document.querySelectorAll(".submenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(".has-dropdown > a").on("click", function (e) {
    e.preventDefault();
    $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
    $(this).toggleClass("open");
  });

  // $(".close-nav").on("click", function () {
  //   $(".mobile-nav-overlay").toggleClass("active");
  //   $(".mobile-nav").toggleClass("active");
  //   $("#nav-lines").toggleClass("active");
  // });

  // Scroll To Top Button
  let scrollToTopBtn = $("#scroll-to-top");

  // Show the button when user scrolls down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  // Smooth scroll to top when the button is clicked
  scrollToTopBtn.on("click", function () {
    // Scroll to top with smooth animation
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  /* Fan area countdown counter */

  // $(".counting").counterUp({
  //   delay: 10,
  //   time: 2000,
  // });

//   const count = document.querySelector(".counting");
// $()
//   count.innerText = 1;
//   setInterval(() => {
//     if (count.innerText < 1000) {
//       count.innerText++;
//     }
//   }, 2);
});
