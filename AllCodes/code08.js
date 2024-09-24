// Pedir para o usuário digitar dois números  e mostre um booleano indicando se a média é maior que 5.

const trueOrFalse = () => {
    let n1 = prompt('Type the first number:')
    n1 = parseFloat(n1)
    
    let n2 = prompt('Type the second number:')
    n2 = parseFloat(n2)
    
    let media = (n1 + n2) / 2
    
    alert(media > 5)
  }
  
  trueOrFalse()