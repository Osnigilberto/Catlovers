// Validação do e-mail ao perder o foco
function validateEmail() {
  const email = document.getElementById("email").value
  const emailError = document.getElementById("emailError")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email === "" || !emailRegex.test(email)) {
    emailError.textContent = "Por favor, insira um e-mail válido."
    emailError.style.display = "block" // Exibe o erro
  } else {
    emailError.style.display = "none" // Remove o erro se válido
  }
}

// Validação da senha ao perder o foco
function validatePassword() {
  const senha = document.getElementById("senha").value
  const senhaError = document.getElementById("senhaError")

  const senhaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/

  if (!senhaRegex.test(senha)) {
    senhaError.textContent =
      "A senha deve ter pelo menos 6 caracteres, incluindo um número e um caractere especial."
    senhaError.style.display = "block" // Exibe o erro
  } else {
    senhaError.style.display = "none" // Remove o erro se válido
  }
}

// Validação do formulário ao submeter
function validateForm() {
  validateEmail() // Verifica o e-mail ao submeter
  validatePassword() // Verifica a senha ao submeter

  // Só permite o envio do formulário se não houver erros
  return document.querySelectorAll('.error[style*="block"]').length === 0
}

function validateForm() {
  // Pega os valores do e-mail e da senha
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value

  // Referências aos elementos de erro
  const emailError = document.getElementById("emailError")
  const senhaError = document.getElementById("senhaError")

  // Expressões regulares para validar e-mail e senha
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const senhaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/

  let isValid = true // Flag para indicar se o formulário é válido

  // Limpar mensagens de erro antes de verificar novamente
  emailError.style.display = "none"
  senhaError.style.display = "none"

  // Validação do e-mail
  if (email === "" || !emailRegex.test(email)) {
    emailError.textContent = "Por favor, insira um e-mail válido."
    emailError.style.display = "block" // Exibe o erro
    isValid = false
  }

  // Validação da senha
  if (!senhaRegex.test(senha)) {
    senhaError.textContent =
      "A senha deve ter pelo menos 6 caracteres, incluindo um número e um caractere especial."
    senhaError.style.display = "block" // Exibe o erro
    isValid = false
  }

  return isValid // Só permite o envio do formulário se tudo estiver válido
}

