console.log ('hello world')

//THE DOC ELEMENT
console.dir(document)
console.log(document.body)

// ACCESSING A DIV VIA SELECTOR
var debtDiv = document.querySelector('div.debt')

console.dir(debtDiv)

var myDebt= 200
debtDiv.innerText = 'My Student Debt is $' + myDebt


// LISTEN TO BUTTON events

var button = document.querySelector('button')
button.addEventListener('click', function() {
  console.log("i've been clicked")
  myDebt += 100
  debtDiv.innerText = 'My Student Debt is $' + myDebt
})


//CLICK TO CHANGE STYLE

var block1 = document.querySelector('.block-1')
var blocks = document.querySelectorAll('.block')
block1.addEventListener('click', function () {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = 'pink'
  }
})


var block2 = document.querySelector('.block-2')
var block2isActive = false
  block2.addEventListener('click', function() {
  if (block2isActive) {
      block2.classList.add('is-active')
  } else {
 block2.classList.remove('is-active')
}
block2isActive = !block2isActive
})

// window event listener
window.addEventListener('click', function (event) {
var dot = document.createElement('div')
dot.classList.add('dot')
dot.style.top = event.pageY + 'px'
dot.style.left = event.pageX + 'px'
document.body.appendChild(dot)
})
