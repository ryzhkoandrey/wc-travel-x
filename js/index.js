// LOADER

const loader = document.querySelector('#loader');

window.addEventListener('load', () => {
   setTimeout(() => {
      loader.classList.add('loader-wrapper--hidden');
   }, 1000)
});

// SWIPER

const swiper = new Swiper('.swiper', {
   loop: true,
   parallax: true,
   speed: 1000,

   keyboard: {
      enabled: true,
   },

   pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
      formatFractionCurrent: function (num) {
         return (num > 9) ? num : '0' + num;
      },
      formatFractionTotal: function (num) {
         return (num > 9) ? num : '0' + num;
      },
   },

   navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

// MOBILE-NAV

const nav = document.querySelector('#mobileNav');
const navBtnOpen = document.querySelector('#modalOpen');
const navBtnClose = document.querySelector('#modalClose');
const navOverlay = document.querySelector('#mobileNavOverlay');

navBtnOpen.onclick = toggleMobileNav;
navBtnClose.onclick = toggleMobileNav;
navOverlay.onclick = toggleMobileNav;

function toggleMobileNav() {
   navOverlay.classList.toggle('mobile-nav-overlay--open');
   nav.classList.toggle('mobile-nav--open');
   document.body.classList.toggle('no-scroll');
}