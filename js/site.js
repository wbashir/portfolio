// navigation slide-in
$(window).load(function() {
  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});

//FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
});

$('.prev, .next').on('click', function() {
    var href = $(this).attr('href');
    $('#secondSlider').flexslider(href)
    return false;
  })
  // waypoints
$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInUpD');
  }, {
    offset: '75%'
  });

});
// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
// fancyBox
$(document).ready(function() {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 450,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
  $("#gameButton").on('click', function() {
       $.fancybox({
            'content' : $("#playTetris")
        });
 
  })
    //  $("#tetrisCanvas").fancybox({
    //   maxWidth: 800,
    //   maxHeight: 450,
    //   fitToView: false,
    //   width: '70%',
    //   height: '70%',
    //   autoSize: false,
    //   closeClick: false,
    //   openEffect: 'none',
    //   closeEffect: 'none'
    // });

});

$(document).ready(function() {
  $(".signup-form").submit(function(e) {

    var formData = $(this).serialize();
    var data = {
      "action": "store_emails"
    };
    data = $(this).serialize() + "&" + $.param(data);

    $.ajax({
      type: "POST",
      dataType: "json",
      url: "server.php", //Relative or absolute path to response.php file
      data: data,
      success: function(data) {
        $('input[type=email]').val('');
        // create the notification
        jQuery.notifyBar({
          html: "Thank you " + data['email_address'] + " for subscribing. We will not spam!",
          delay: 2000,
          animationSpeed: "normal"
        });
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);

      }
    });
    return false;
  });

});