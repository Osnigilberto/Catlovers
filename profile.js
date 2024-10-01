// Função para mostrar a seção correta e mudar o conteúdo da profile-posts
function showSection(section) {
  // Esconde todas as seções
  document.querySelectorAll('.content-section').forEach((section) => {
    section.classList.remove('active');
  });

  // Mostra a seção clicada
  document.getElementById(section).classList.add('active');

  // Referência ao contêiner das postagens
  const postsContainer = document.getElementById('profile-posts');

  // Limpa as postagens atuais
  postsContainer.innerHTML = '';

  // Define os dados de exemplo para cada seção
  let postsData = [];

  if (section === 'posts') {
    postsData = [
      'assets/catimage.jpeg',
      'assets/catimage1.jpeg',
      'assets/catimage2.jpeg',
      'assets/catimage3.jpeg',
    ];
  } else if (section === 'saved') {
    postsData = [
      'assets/savedimage1.jpeg',
      'assets/savedimage2.jpeg',
      'assets/savedimage3.jpeg',
    ];
  } else if (section === 'liked') {
    postsData = ['assets/likedimage1.jpeg', 'assets/likedimage2.jpeg'];
  }

  // Adiciona as novas imagens de postagens ao container
  postsData.forEach((imageSrc) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const img = document.createElement('img');
    img.src = imageSrc;

    postDiv.appendChild(img);
    postsContainer.appendChild(postDiv);
  });
}
