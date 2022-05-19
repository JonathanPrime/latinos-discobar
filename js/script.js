let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
      document.getElementById('img-logo').src = '../images/logo/logo-max.svg';
   } else {
      document.querySelector('.header').classList.remove('active');
      document.getElementById('img-logo').src = '../images/logo/logo-max-white.svg';
   }
}


popupWhatsApp = () => {

   let btnClosePopup = document.querySelector('.closePopup');
   let btnOpenPopup = document.querySelector('.whatsapp-button');
   let popup = document.querySelector('.popup-whatsapp');
   let sendBtn = document.getElementById('send-btn');

   btnClosePopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
   })

   btnOpenPopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
   })

   sendBtn.addEventListener("click", () => {
      let msg = document.getElementById('whats-in').value;
      let relmsg = msg.replace(/ /g, "%20");
      //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
      window.open('https://wa.me/573505895578?text=' + relmsg, '_blank');

   });

   /* Open pop-up in 15 seconds */
   /* setTimeout(() => {
     popup.classList.toggle('is-active-whatsapp-popup');
   }, 15000); */

}
/* var owl = $('.owl-carousel');
(function ($) {
   $.fn.shuffle = function () {
      var allElems = this.get(),
         getRandom = function (max) {
            return Math.floor(Math.random() * max);
         },
         shuffled = $.map(allElems, function () {
            var random = getRandom(allElems.length),
               randEl = $(allElems[random]).clone(true)[0];
            allElems.splice(random, 1);
            return randEl;
         });
      this.each(function (i) {
         $(this).replaceWith($(shuffled[i]));
      });
      return $(shuffled);
   };

})(jQuery);
// Replace first class in function below if you have a custom class for your owl slider.
// Replace second class with the class or element tag for each the items of slider.
$(function () {
   $(".owl-carousel .item").shuffle();
   owl.owlCarousel();
}); */


$('#customers-testimonials').owlCarousel({
   rtl: true,
   loop: true,
   nav: true,
   navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
   center: true,
   items: 3,
   margin: 0,
   autoplay: true,
   dots: false,
   autoplayTimeout: 8500,
   smartSpeed: 450,

   responsive: {
      0: {
         items: 1
      },
      768: {
         items: 2
      },
      1170: {
         items: 3
      },
      3840: {
         items: 3
      }
   }
});

var owl = $('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   items: 5,
});

$('.owl-filter').on('click', '.item', function () {
   var $item = $(this);
   var filter = $item.data('owl-filter')
   owl.owlcarousel2_filter(filter);
});

popupWhatsApp();

