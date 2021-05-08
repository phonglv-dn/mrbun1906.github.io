// var containerMenu = document.querySelector(".menu-hamburger");
// console.log(containerMenu);

// containerMenu.addEventListener('click',()=>{
//     if(containerMenu.classList.contains("active")) {
//         containerMenu.classList.remove("active")
//     } else {
//         containerMenu.classList.add("active");
//     }    
// }
$(".menu-hamburger").click(function () {
  $(".menu-hamburger").toggleClass("active");
  $(".menu-banner-mobile").slideToggle('slow');
});
$(".menu-contact").click(function () {
  $(".contact-name").slideToggle('slow');
});
$('.wrapper-slider-customers').slick({
  dots: true,
  infinite: true,
  autoRun: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$('.brands-mobile').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$(".footer-contact-item-1").click(function () {
  $(".footer-contact-item-1").toggleClass("active");
  $(".footer-contact-item-2").slideToggle('slow');
});