/*
- Jquery ama neden?
- Jquery kurulumu CDN ya da kendi sunucumuz
- Jquery selectors. 
- Document Ready Event
    $(document).ready(function(){});
    $(function(){});
- Jquery events.
- Jquery UI nedir 
  https://jqueryui.com/effect/
  https://api.jqueryui.com/1.11/bounce-effect/

  Ek kaynaklar
  https://www.w3schools.com/jquery/jquery_selectors.asp
  https://www.w3schools.com/jquery/jquery_events.asp
*/

/*
$(document).ready(function(){
  //alert("hazırız");
  
  //why jquery start
  $(".editor p").dblclick(function () {
    $(this).slideToggle("slow");
  });
  //why jquery end


  //hover start
  $("h1").hover(function(){
    console.log("Doğru adres!")
  },
  function(){
    console.log("Gitme!")
  }); 
  //hover end

  //mouseover-mouseleave start
  $("#logo").mouseover(function () { 
    $("body").css({
      opacity: 0.5
    });
  });
  $("#logo").mouseleave(function () { 
    $("body").css({
      opacity: 1
    });
  });
  //mouseover-mouseleave end
  
  //doubleclick + start
  $("#mainContent .news li").dblclick(function () {
    $(this).hide();
  });
  //doubleclick function end

  //first-child start
  $(".news li:first-child").click(function () { 
    $(this).fadeOut();    
  });
  //keypress end

  //keypress start
  $(document).keypress(function() {
    alert("Ne yapmaya çalışıyorsun?")
  });
  //keypress end

  //focus-blur start
  $("input").focus(function(){
    $(this).css("background-color", "#ffe5e5");
    $(this).css("border", "2px solid darkred");
    $(this).css("outline", "none");
  });
  $("input").blur(function(){
    $(this).css("background-color", "#ffffff");
    $(this).css("border", "1px tomato solid");
    $(this).css("outline", "none");
  });
  //focus-blur end


});*/
$(document).ready(function(){

  $(".editor p").dblclick(function () {
    $(this).slideToggle("slow");
  });

  //hover start
  $("h1").hover(function(){
    console.log("Doğru adres!")
  },
  function(){
    console.log("Gitme!")
  }); 
  //hover end

  //mouseover-mouseleave start
  $("#logo").mouseover(function () { 
    $("body").css({
      opacity: 0.4
    });
  });
  $("#logo").mouseleave(function () { 
    $("body").css({
      opacity: 1
      
    });
  });
  //mouseover-mouseleave end

  $("#mainContent .news li").dblclick(function () {
    $(this).hide();
  });

  $("header section ul li").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    } 
  });

  $(document).keypress(function() {
    alert("Ne yapmaya çalışıyorsun?")
  });

  //first child start
  $(".news li:first-child").click(function () { 
    $(this).fadeOut(2000);   
  });
  //first child end

  $("#search").focus(function(){
    $(this).css("background-color", "#ffe5e5");
    $(this).css("border", "2px dotted darkred");
    $(this).css("outline", "none");
  });
  $("#search").blur(function(){
    $(this).css("background-color", "#ffffff");
    $(this).css("border", "1px tomato solid");
    $(this).css("outline", "none");
  });

  $("#iller").change(function () { 
    console.log(this.value);
    
  });

});