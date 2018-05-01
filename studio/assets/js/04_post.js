document.addEventListener('DOMContentLoaded',function(event){
    var i = 0;
    var dataText = [ "The full involvement of the US in the war, <br> the Japanese bombing of Pearl Harbor <br> and the gap of the labor force, caused by <br> departing soldiers also meant possibilities for women."];
    var speed = 50;

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".introduction").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }


    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }


   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }

    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});
