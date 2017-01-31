/*function theRotator() {
  
  $('div.index-slider img').css({opacity: 0.0});
 
  
  $('div.index-slider img:first').css({opacity: 1.0});
 

  setInterval('rotate()',4000);
}
 
function rotate() { 
  
  var current = ($('div.index-slider img.active-banner')?  $('div.index-slider img.active-banner') : $('div.index-slider img:first'));
 
  
  var next = ((current.next().length) ? ((current.next().hasClass('active-banner')) ? $('div.index-slider img:first') :current.next()) : $('div.index-slider img:first')); 
 
  
  next.css({opacity: 0.0})
  .addClass('active-banner')
  .animate({opacity: 1.0}, 2500);
 
  
  current.animate({opacity: 0.0}, 2500)
  .removeClass('active-banner');
};*/




$(document).ready(function(){
/*---------Слайдер на главной странице-------*/

  
  $('#service-slider').owlCarousel({
  loop:true,
  nav:true,
  dots:true,
  items:1,
 
  navText: [
      '<img src="img/arrow-bottom.png" style="transform: rotate(90deg) " alt="">',
      '<img src="img/arrow-bottom.png" style="transform: rotate(270deg) " alt="">'
      ],
  afterInit : function(elem){
      var that = this
      that.owlControls.prependTo(elem)
    }
 });
  $('#detail-slider').owlCarousel({
  loop:true,
  nav:true,
  dots:true,

  responsive : {
    // breakpoint from 0 up
    0 : {
      items:1
      
    },
    // breakpoint from 480 up
    768 : {
      items:3
    },
    // breakpoint from 768 up
    992 : {
        items:5
    }
  },

  
  
 

  navText: [
      '<img src="img/arrow-right.png" style="transform: scale(-1, 1) " alt="">',
      '<img src="img/arrow-right.png" alt="">'
      ],
  afterInit : function(elem){
      var that = this
      that.owlControls.prependTo(elem)
    }
 });
 $("#ex1,#ex2").slider({});
  $('#about-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1
  });
  $(".burger").click(function(event) {
    $("#modal-menu").modal();
  });
  $(document).on("click",".modal-backdrop",function(){
    $("#modal-menu").modal("hide");
  });
  $(".loupe img").click(function(event) {
    if($("input").is(".search")){
      $(".loupe input").hide(300,function(){ $(".loupe input").remove(); });
      $(".basket-link").delay(300).css("visibility","visible");
      $(".loupe").delay(300).css({
        "position":"inherit"
      });
      $(this).delay(300).css({
         "position":"inherit",
          "margin-bottom":"0px",
          "right":"0"
      });
    }
    else{
      var inputTag = '<input type="text" class="search">';
        $(".loupe").append(inputTag).css({
          
          "position":"absolute",
          "right":"0",
          "bottom":"-5px",
        });
        $(".loupe input").css({"display":"none"}).show(300);
        $(this).css({
          "position":"absolute",
          "right":"8px",
          "bottom":"50%",
          "margin-bottom":"-12px"
        });
        $(".basket-link").css("visibility","hidden");
    }

  });

  

});