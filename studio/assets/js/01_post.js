var debtDiv = document.querySelector('div.debt')
var myDebt = 'ideal'
var introductionDiv = document.querySelector('div.introduction')
var popupDiv = document.querySelector('div.popup')
var imageDiv = document.querySelector('img.popupImage')

document.addEventListener('DOMContentLoaded',function(event) {
    var i = 0;
    var dataText = [ "During the post war period, magazines were the main mean of communicating, lifestyle and social ideals."];
    var speed = 50;

debtDiv.addEventListener('mouseover' , function() {
  myDebt = 'sexually passive'
  debtDiv.innerText = 'sexually passive'
})

debtDiv.addEventListener('mouseout' , function() {
    debtDiv.innerText = '"the ideal women"'
})

introductionDiv.addEventListener('mouseover', function() {
    fetch('https://www.googleapis.com/books/v1/volumes/pt-o5xnJXvkC')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // render the data
		  render(jsonData);
    });

})

function render(data) {
	console.log(data);
    var url = data.volumeInfo.imageLinks.large;
    console.log(url)
    imageDiv.src = url;
    popupDiv.style.display = 'block';
}

introductionDiv.addEventListener('mouseout', function() {
    popupDiv.style.display = 'none';
})

window.addEventListener('click', function (event) {
var dot = document.createElement('div')
dot.classList.add('dot')
dot.style.top = event.pageY + 'px'
dot.style.left = event.pageX + 'px'
document.body.appendChild(dot)
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
