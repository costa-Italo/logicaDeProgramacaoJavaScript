// Peça para o usuário digitar dois números e mostre a soma.

// Caso o usuário digite qualquer caractere que não seja 'number', mostre uma mensagem de aviso.


const sum = () => {
    let n1 = prompt('Digite o primeiro número:');
    n1 = parseFloat(n1);
  
    if (isNaN(n1)) {
      alert('Digite apenas números!')
    }
  
    let n2 = prompt('Digite o segundo número:');
    n2 = parseFloat(n2);
  
    if (isNaN(n2)) {
      alert('Digite apenas números!');
      return;
    };
    alert(`A soma dos números é ${n1+n2}`);
  };
  
  sum();