//loading

setTimeout(function(){
  $("#loading").css("display", "none");
}, 1450);

//scroll bar

  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
  var width = $(window).width(); 
  
  window.onscroll = function(){
  if ((width >= 900)){
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          $("#middle").css("background-size","150% auto");
      }else{
          $("#middle").css("background-size","100% auto");        
      }
  }
  };

//Anime list