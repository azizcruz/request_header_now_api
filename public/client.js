// client-side js
// run by the browser each time your view template is loaded

(function(){
 
  $("input").on("click", function() {
    $(this).select()
    document.execCommand("copy");
    $("#copied").fadeIn(400);
    setTimeout(function() {$("#copied").fadeOut(400);}, 400)
  })
  
  
  
})()