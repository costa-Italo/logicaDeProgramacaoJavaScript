// Crie uma função que pergunte ao usuário dois números e mostre o resultado da exponenciação.

const exponentiation = () => {
    let n1 = prompt('Type the first number:')
    n1 = parseInt(n1)
    
    let n2 = prompt('Type the second number:')
    n2 = parseInt(n2)
    
    let result = n1 ** n2
    
    alert(`The number ${n1} raised to ${n2} is: ${result}.`) 
  }
  
  exponentiation()