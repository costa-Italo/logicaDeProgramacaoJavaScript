// Crie uma função que peça ao usuário para digitar dois números e mostre a sua média.

const media = () => {
    let n1 = prompt('Type the first note:');
    n1 = parseFloat(n1);
  
    let n2 = prompt('Type the second note:');
    n2 = parseFloat(n2);
  
    let finalResult = (n1 + n2) / 2;
    
    alert(`The final result is: ${finalResult}.`);
  }
  
  media();