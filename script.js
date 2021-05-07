// var containerMenu = document.querySelector(".menu-hamburger");
// console.log(containerMenu);

// containerMenu.addEventListener('click',()=>{
//     if(containerMenu.classList.contains("active")) {
//         containerMenu.classList.remove("active")
//     } else {
//         containerMenu.classList.add("active");
//     }    
// }
$(".menu-hamburger").click( function(){
    $(".menu-hamburger").toggleClass("active");
    $(".menu-banner-mobile").slideToggle('slow');
});
$(".menu-contact").click(function() {
    $(".contact-name").slideToggle('slow');
});