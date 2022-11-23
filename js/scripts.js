(function($) 
{
  "use strict"; // Mulai menggunakan strict

  // Smooth scrolling pakai jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() 
  {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) 
      {
        $('html, body').animate(
          {
            scrollTop: (target.offset().top - 72)
          }, 1000, "easeInOutExpo");
          return false;
      }
    }
  });

  //Menutup menu responsif ketika tautan digerakkan gulir diklik
  $('.js-scroll-trigger').click(function() 
  {
    $('.navbar-collapse').collapse('hide');
  });

  // Aktifkan scrollspy guna menambahkan kelas aktif ke item navbar di scroll
  $('body').scrollspy(
    {
      target: '#mainNav',
      offset: 75
    });

  // Collapse Navbar
  var navbarCollapse = function() 
  {
    if ($("#mainNav").offset().top > 100) 
    {
      $("#mainNav").addClass("navbar-scrolled");
    } else 
    {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse sekarang jika halaman tidak berada di atas
  navbarCollapse();
  // Collapse the navbar ketika halaman di scroll
  $(window).scroll(navbarCollapse);

})(jQuery); // Akhir dari penggunaan strict
