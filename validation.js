document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Limpa as mensagens de erro anteriores
  clearErrors();

  // Captura os valores dos campos
  const firstname = document.getElementById('firstname-input').value.trim();
  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();
  const repeatPassword = document
    .getElementById('repeat-password-input')
    .value.trim();

  let hasError = false;

  // Validação do nome
  if (firstname === '') {
    showError('firstname-error', 'Por favor, preencha o nome.');
    hasError = true;
  }

  // Validação do email
  if (!validateEmail(email)) {
    showError('email-error', 'Por favor, insira um email válido.');
    hasError = true;
  }

  // Validação da senha
  if (password.length < 6) {
    showError('password-error', 'A senha deve ter pelo menos 6 caracteres.');
    hasError = true;
  }

  // Validação de confirmação de senha
  if (password !== repeatPassword) {
    showError('repeat-password-error', 'As senhas não coincidem.');
    hasError = true;
  }

  // Se houver algum erro, não permite o envio do formulário
  if (!hasError) {
    alert('Formulário enviado com sucesso!');
  }
});

// Função para validar email com Regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Função para exibir a mensagem de erro
function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.innerText = message;
  errorElement.style.display = 'block';
}

// Função para limpar as mensagens de erro
function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach((error) => {
    error.innerText = '';
    error.style.display = 'none';
  });
}
