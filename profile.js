// Seleciona os elementos
const editPhotoBtn = document.getElementById('edit-photo-btn');
const fileInput = document.getElementById('file-input');
const avatarImg = document.getElementById('avatar-img');

// Adiciona evento de clique ao botão de editar foto
editPhotoBtn.addEventListener('click', function () {
  fileInput.click(); // Aciona o clique no input de arquivo
});

// Adiciona evento de mudança ao input de arquivo
fileInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImg.src = e.target.result; // Atualiza a imagem do avatar
    };
    reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
  }
});
