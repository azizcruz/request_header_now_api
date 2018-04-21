// client-side js
// run by the browser each time your view template is loaded

(function(){
 
  $('.mybtn').on('click', function(e){
  
    $.get("/client/data", (data) => {
    
      console.log(data)
    
    })
    
  });
  
})()