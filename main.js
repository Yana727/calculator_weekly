let button = document.querySelectorAll('button')
let Answer = document.querySelector('.Answer')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let special = document.querySelectorAll('.special')
let operator = ''
let num1 = ''
let num2 = ''
let final = ''
let operationClicked = false

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', showNumbers)
}

function showNumbers (clicking) {
  // GET WHAT WAS clicked
  let buttonClicked = clicking.target.value
  Answer.innerHTML += buttonClicked
  // CHECK IF WAS WHAT CLICKED IS  +-/*
  if (operationClicked) {
    num2 += buttonClicked
  } else {
    num1 += buttonClicked
  }

  // if ("+*-/".indexOf(buttonClicked) >=0 )
  if (buttonClicked === '+' || buttonClicked === '-' || buttonClicked === '*' || buttonClicked === '/') {
    operationClicked = true
    operator = buttonClicked
  }
}

function clearNbrs(clicky) {
  Answer.innerHTML = ''
  num1 = 0
  num2 = 0
  operator = ''
  operationClicked = false
}

clear.addEventListener('click', clearNbrs)
equal.addEventListener('click', function () {
  var final = 0

    console.log(num1, num2, operator)
  if (operator === '+') {
    final = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {
    final = parseFloat(num1) - parseFloat(num2)
  } else if (operator === '/') {
   final = parseFloat(num1) / parseFloat(num2)
 } else if (operator === '*') {
    final = parseFloat(num1) * parseFloat(num2)
 }

  Answer.innerHTML += '=' + final
}
)
