const form = document.querySelector('.formularioCenter')


function login() {
  var senha = document.getElementById('senha').value
  var email = document.getElementById('email').value

  if (senha === "admin" && email === "admin") {
    alert('sucesso')
  } else {
    alert('Senha incorreta')
  }

}