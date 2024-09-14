// Perguntar o nome do usuário e mostrar uma mensagem de boas vindas.

const helloUser = () => {
    let user = prompt('Digite o seu nome:')
  
   alert(`Olá ${user}!`)
  
    return user
  }
  
  helloUser()