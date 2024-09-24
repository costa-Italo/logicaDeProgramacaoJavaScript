// Crie uma função que pergunte ao usuário duas notas e diga se está aprovado ou não. A média final é 5.

const approveOrNot = () => {
    let n1 = parseFloat(prompt('Type your first note:'))
    let n2 = parseFloat(prompt('Type your second note:'))
    
    let media = (n1 + n2) / 2
    
    if (n1 === 0 || n2 === 0 || media <= 5) {
      alert('Reproved')
    } else {
      alert('Approved')
    }
  }
  
  approveOrNot()