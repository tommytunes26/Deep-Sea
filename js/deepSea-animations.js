//Birds---------------
$(document).ready(function(e) {
    var width = $(document).width();
    var i = 0;
    
    function goRight() {
        $("#birds").removeClass("hide");
        $("#birds").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 0);
        }
         
      )};
    
    function goLeft() {
        $("#birds").addClass("hide");
        $("#birds").animate({
        left: -300
      }, 0, function() {
         setTimeout(goRight, 5000);
        });        
    }
    
        setTimeout(goRight, 50);
    
});


//Boat and Title-------------
$(document).ready(function (){
    $("#title").fadeOut(0).delay(1000).fadeIn("slow").delay(3000).fadeOut("slow");
    
    $("#boat").delay(3500).animate({
    left: $("html").parent().width() / 2 - $("#boat").width() / 2
}, 3000);
});


//Fish------------------------
$(document).ready(function(e) {
    var width = $(document).width();
    
    function goRight() {
        $("#fish-school").animate({
        left: width
      }, 0, function() {
         setTimeout(goLeft, 300);
      });
    }
    function goLeft() {
        $("#fish-school").removeClass("hide");
        $("#fish-school").animate({
        left: -600
      }, 7000, function() {
         setTimeout(goRight, 10000);
      });        
    }

    setTimeout(goRight, 1000);
});


//Bubbles------------------------

$(window).scroll(function () {
    var height = $(document).height();
    var y = $(this).scrollTop();
    
    if ($(window).scrollTop() > 100) {
        $('#bubbles').fadeIn();
    } else {
        $('#bubbles').fadeOut();
    }

});



























    