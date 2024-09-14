//Pedir para o usuário digitar dois números e converter para inteiro.
//Mostrar o resultado das 04 operações básicas: adição, subtração, multiplicação e divisão.

const math = () => {
    let n1 = prompt('Digite o primeiro número:');
    n1 = parseInt(n1);
  
    if (isNaN(n1)) {
      alert('Digite apenas números!')
    }
  
    let n2 = prompt('Digite o segundo número:');
    n2 = parseInt(n2);
  
    if (isNaN(n2)) {
      alert('Digite apenas números!');
      return;
    };
    alert(`A soma dos números é ${n1+n2}`);
    alert(`A subtração dos números é ${n1-n2}`);
    alert(`A multiplicação dos números é ${n1*n2}`);
    alert(`A divisão dos números é ${n1/n2}`);
  };
  
  math();