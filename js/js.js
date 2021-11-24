window.onload = function(){
    var txtTitulo = 'FACT NEWS';
    var txt1 = document.getElementById("titulo");
    
    var speed = 100;
    var cont = 0;

    function typeWriter () {
      if(cont < txtTitulo.length){
        txt1.innerHTML += "<u>" + txtTitulo.charAt(cont) + "</u>";
        cont++;
        setTimeout(typeWriter, speed);
       }else{
         cont = 0;
       }
      }

     typeWriter();

     $(function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 20) {
          $(".img-logo").addClass("img-logo-hover");
        } else {
          $(".img-logo").removeClass("img-logo-hover");
        }
      });
    });

 
 

  };
  
