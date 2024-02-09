var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      950:{
        slidesPerView:3,
      },
    },
  });
var swiper2 = new Swiper(".Testimonials", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}