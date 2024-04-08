

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("header").css("background-color" , "#8f8f8fe8");
        }
  
        else{
            $(".black").css("background" , "#333");  	
        }
    })
  })