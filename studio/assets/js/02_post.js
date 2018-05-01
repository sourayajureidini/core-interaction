var blockOne = document.querySelector('.block.one')
var blockTwo = document.querySelector('.block.two')
var containerOne = document.querySelector('.container.one')
var containerTwo = document.querySelector('.container.two')

document.addEventListener('DOMContentLoaded',function(event){
    var i = 0;
    var dataText = [ "In the 1950s, all American households <br> read one or more magazines per week.."];
    var speed = 50;


containerTwo.addEventListener('dragover', function(event) {
	event.preventDefault()
})

containerTwo.addEventListener('drop', function(event) {
	blockTwo.classList.add('is-active')
	blockOne.classList.remove('is-active')
})

containerOne.addEventListener('dragover', function(event) {
	event.preventDefault()
})

containerOne.addEventListener('drop', function(event) {
	blockOne.classList.add('is-active')
	blockTwo.classList.add('is-active')
})





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
