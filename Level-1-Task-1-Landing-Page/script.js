  //cssmenu
  //<![CDATA[
  $("#cssmenu ul ul li:odd").addClass("odd"),$("#cssmenu ul ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($("#cssmenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length});

  //counting number
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 5000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if(startValue == endValue){
        clearInterval(counter);
      }
    }, duration);
  });

  //slider
  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
      delay: 7500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  //back2top button
  $(function() { $(window).scroll(function() { if($(this).scrollTop()>100) { $('#back2top').fadeIn(200); } else { $('#back2top').fadeOut(300); } });
  $('#back2top').click(function() { $('body,html').animate({scrollTop:0},800) .animate({scrollTop:25},200) .animate({scrollTop:0},150) .animate({scrollTop:10},100) .animate({scrollTop:0},50); }); });
