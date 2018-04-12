var blockOne = document.querySelector('.block.one')
var blockTwo = document.querySelector('.block.two')
var containerOne = document.querySelector('.container.one')
var containerTwo = document.querySelector('.container.two')

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
