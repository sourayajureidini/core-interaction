var debtDiv = document.querySelector('div.debt')
var myDebt = 'ideal'


debtDiv.addEventListener('mouseover' , function() {
  myDebt = 'sexually passive'
  debtDiv.innerText = 'sexually passive',
})

debtDiv.addEventListener('mouseout' , function() {
    debtDiv.innerText = '"the ideal women"'
})

window.addEventListener('click', function (event) {
var dot = document.createElement('div')
dot.classList.add('dot')
dot.style.top = event.pageY + 'px'
dot.style.left = event.pageX + 'px'
document.body.appendChild(dot)
})
