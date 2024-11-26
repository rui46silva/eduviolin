   // ANIMAÇÃO GALERIA //

   const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  //ANIMAÇÃO NEONS//
  const observerNeon = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('neonAnimation');
      } else {
        entry.target.classList.remove('neonAnimation');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  const hiddenNeons = document.querySelectorAll('.hiddenNeon');
  hiddenNeons.forEach((el) => observerNeon.observe(el));

  // FAQS //

  var acc = document.getElementsByClassName("accordion_panel_title");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    let active = document.querySelectorAll(".accordion_panel_title.active");

    if (panel.style.maxHeight && this.classList.contains("active")) {
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("active");
        active[j].nextElementSibling.style.maxHeight = "0px";
        active[j].nextElementSibling.style.overflow = "hidden";
      }
      this.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.overflow = "visible";
    } else {
      panel.style.maxHeight = "0px";
      panel.style.overflow = "hidden";
      this.classList.remove("active");
    }
  });
}
  
    // HAMBURGER MENU
  $(document).ready(function() {
    $('.navbar-menu ul').css('display','none');
    $('.navbar-menu .menu_lang').css('display','none');
    $('#side-menu').click(function () {
        $('#side-menu').toggleClass('open');
        if ($('#side-menu').hasClass('open')) {
            $('.navbar-menu .menu').fadeIn(1000);
            $('.navbar-menu .socialMedia').fadeIn(1000);
            $('.navbar-menu .menu_lang').fadeIn(1000);
            $('.navbar-menu').addClass('open');
            $('body').addClass('lock-scroll');
            $('svg').addClass('svgOpen');
        } else {
            $('.navbar-menu').removeClass('open');
            $('.navbar-menu .menu').fadeOut(400);
            $('.navbar-menu .socialMedia').fadeOut(400);
            $('.navbar-menu .menu_lang').fadeOut(400);
            $('body').removeClass('lock-scroll');
            $('svg').removeClass('svgOpen');
        };
  
        $('a').click(function() {
          $('#side-menu').removeClass('open');
          $('.navbar-menu').removeClass('open');
          $('body').removeClass('lock-scroll');
          $('svg').removeClass('svgOpen');
      });
    });
  
  });


  // SLIDER //

  var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    
  });

  // CLIENTES //

  $(function(){
   var $clientcarousel = $('#clients-list');
     var clients = $clientcarousel.children().length;
     var clientwidth = (clients * 220); // 140px width for each client item 
     $clientcarousel.css('width',clientwidth);
     
     var rotating = true;
     var clientspeed = 0;
     var seeclients = setInterval(rotateClients, clientspeed);
     
     $(document).on({
       mouseenter: function(){
         rotating = false; // turn off rotation when hovering
       },
       mouseleave: function(){
         rotating = true;
       }
     }, '#clients');
     
     function rotateClients() {
       if(rotating != false) {
         var $first = $('#clients-list li:first');
         $first.animate({ 'margin-left': '-220px' }, 5000, "linear", function() {
           $first.remove().css({ 'margin-left': '0px' });
           $('#clients-list li:last').after($first);
         });
       }
     }
   });


   