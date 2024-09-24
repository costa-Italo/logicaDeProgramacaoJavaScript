// Crie uma função que pergunte ao usuário dois números e retorne o resto da divisão.

const resto = () => {
    let n1 = prompt('Type the first number')
    n1 = parseInt(n1)
  
    let n2 = prompt('Type the second number')
    n2 = parseInt(n2)
  
    let module = n1 % n2
    alert(`The remainder of dividing ${n1} by ${n2} is: ${module}.`)
  }
  resto();