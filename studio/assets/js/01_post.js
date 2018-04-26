var debtDiv = document.querySelector('div.debt')
var myDebt = 'ideal'
var introductionDiv = document.querySelector('div.introduction')
var popupDiv = document.querySelector('div.popup')
var imageDiv = document.querySelector('img.popupImage')

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
