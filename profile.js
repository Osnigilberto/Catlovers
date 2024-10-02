//Open botão sidebar

document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar")
})
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".profile-nav li")
  const sections = document.querySelectorAll(".profile-section")
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Remover classe 'active' de todos os itens
      navItems.forEach((nav) => nav.classList.remove("active"))
      // Adicionar classe 'active' ao item clicado
      item.classList.add("active")
      // Mostrar a seção correspondente e ocultar as outras
      sections.forEach((section) => (section.style.display = "none"))
      sections[index].style.display = "block"
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // Carregar os dados do localStorage quando a página é carregada
  const savedName = localStorage.getItem("name")
  const savedBio = localStorage.getItem("bio")

  if (savedName) {
    document.querySelector(".profile-info h1").textContent = savedName
    document.getElementById("name").value = savedName // Preencher o campo com o valor salvo
  }
  if (savedBio) {
    document.getElementById("bio").value = savedBio // Preencher o campo com o valor salvo
    document.getElementById("charCount").textContent = 150 - savedBio.length // Atualiza o contador de caracteres
  }

  // Função para abrir o modal
  function openModal() {
    document.getElementById("editModal").style.display = "block"
  }

  // Função para fechar o modal
  function closeModal() {
    document.getElementById("editModal").style.display = "none"
  }

  // Adiciona evento de clique para o botão "Editar Perfil" abrir o modal
  document
    .querySelector(".edit-profile-btn")
    .addEventListener("click", openModal)

  // Adiciona evento de clique para fechar o modal ao clicar no botão de fechar (X)
  document.querySelector(".close").addEventListener("click", closeModal)

  // Contador de caracteres para o campo bio
  const bioTextarea = document.getElementById("bio")
  const charCount = document.getElementById("charCount")
  const maxLength = bioTextarea.getAttribute("maxlength")

  bioTextarea.addEventListener("input", function () {
    const remaining = maxLength - bioTextarea.value.length
    charCount.textContent = remaining
  })

  // Lidar com o evento de submissão do formulário
  document
    .getElementById("editProfileForm")
    .addEventListener("submit", function (event) {
      event.preventDefault() // Previne o comportamento padrão de submissão do formulário

      // Captura os valores do formulário
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const bio = document.getElementById("bio").value
      const profilePic = document.getElementById("profilePic").files[0] // Pega o arquivo da imagem

      // Atualizar a imagem de perfil se uma nova imagem for selecionada
      if (profilePic) {
        const reader = new FileReader()
        reader.onload = function (e) {
          document.querySelector(".profile-pic").src = e.target.result // Atualiza a imagem na página
        }
        reader.readAsDataURL(profilePic) // Ler o arquivo como DataURL e mostrar a prévia
      }

      // Atualizar o nome e a bio no <h1> da classe profile-info
      document.querySelector(".profile-info h1").textContent = name

      // Salvar os dados no localStorage
      localStorage.setItem("name", name)
      localStorage.setItem("bio", bio)

      // Fechar o modal após salvar
      closeModal()
    })
})

//comportamento dinamico

const posts = [
  { img: "post1.jpg", description: "" },
  { img: "post2.jpg", description: "" },
  { img: "post2.jpg", description: "" },
  { img: "post2.jpg", description: "" },
  { img: "post2.jpg", description: "" },
  // Mais posts
]

const profileFeed = document.querySelector(".profile-feed")

posts.forEach((post) => {
  const postDiv = document.createElement("div")
  postDiv.classList.add("post")

  postDiv.innerHTML = `
<img src="${post.img}" alt="Post">
<p>${post.description}</p>
`

  profileFeed.appendChild(postDiv)
})
