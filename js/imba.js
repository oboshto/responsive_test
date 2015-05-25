(function() {
  var footerMenu = $('.main-footer .footer-menu').children().clone();
  $(footerMenu).removeClass('navbar-right').addClass('footer-menu-sidebar').insertAfter(".sidebar nav");
  
  var topMenu = $('.navbar-fixed-top .navbar-collapse').children().clone();
  $(topMenu).removeClass('navbar-right').addClass('top-menu-sidebar').insertBefore(".sidebar header");
  
  $('.toggle-switch').on('click', function(e){
      $(this).toggleClass('active');
      $('.sidebar').toggleClass('opened');
      e.preventDefault();
  });
  
  $('.sub-toggle').on('click', function(e){
      $(this).toggleClass('opened');
      $('.sub-menu').toggleClass('opened');
      e.preventDefault();
  });
})();
