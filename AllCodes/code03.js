// Crie uma função que peça ao usuário dois números e mostre a soma.

const sum = () => {
  let number1 = prompt('Type the first number:');
  number1 = parseFloat(number1);

  let number2 = prompt('Type the second number:');
  number2 = parseFloat(number2);

  alert(`The result is: ${number1+number2}`)
}

sum();