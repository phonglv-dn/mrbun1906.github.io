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
$(".contact-icon").click(function () {
  $(".contact-name").slideToggle('slow');
});
$('.scrollDown').click(function(){
  $('html,body').animate({
    scrollTop:$('.about-us').offset().top
  },400);
});
$('.wrapper-slider-customers').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear'
});
$(".footer-contact-item-1").click(function () {
  $(".footer-contact-item-1").toggleClass("active");
  $(".footer-contact-item-2").slideToggle('slow');
});