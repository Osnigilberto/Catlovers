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

// script.js

// Seleciona os elementos do DOM
const newMessageButton = document.getElementById("new-message-button")
const modal = document.getElementById("new-message-modal")
const closeButton = document.querySelector(".close-button")

// Abre o modal ao clicar no botão
newMessageButton.onclick = function () {
  modal.style.display = "block"
}

// Fecha o modal ao clicar no "X"
closeButton.onclick = function () {
  modal.style.display = "none"
}

// Fecha o modal ao clicar fora do conteúdo do modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none"
  }
}

// Lida com o envio da mensagem
document.getElementById("send-message").onclick = function () {
  const recipient = document.getElementById("recipient").value
  const message = document.getElementById("message").value

  // Aqui você pode implementar a lógica para enviar a mensagem
  console.log(`Enviando mensagem para ${recipient}: ${message}`)

  // Limpa os campos e fecha o modal
  document.getElementById("recipient").value = ""
  document.getElementById("message").value = ""
  modal.style.display = "none"
}

// script.js

let selectedContact = null // Armazena o contato selecionado
const messageContainer = document.getElementById("message-container")
const contactNameDisplay = document.getElementById("contact-name")

// Função para selecionar um contato
function selectContact(name) {
  selectedContact = name
  contactNameDisplay.textContent = name // Atualiza o título com o nome do contato
  messageContainer.innerHTML = "" // Limpa as mensagens ao selecionar um novo contato

  // Exibe mensagens pré-definidas para o contato (exemplo)
  if (name === "Maria") {
    messageContainer.innerHTML = `
            <div class="message received"><p>Oi! Como você está?</p></div>
            <div class="message sent"><p>Estou bem, e você?</p></div>
        `
  } else if (name === "João") {
    messageContainer.innerHTML = `
            <div class="message received"><p>Oi! Vamos nos encontrar depois?</p></div>
        `
  } else if (name === "Ana") {
    messageContainer.innerHTML = `
            <div class="message received"><p>Olá! Como está seu gato?</p></div>
        `
  }
}

// Lida com o envio da mensagem
document.getElementById("send-button").onclick = function () {
  const inputMessage = document.getElementById("input-message").value
  if (inputMessage && selectedContact) {
    // Adiciona a mensagem enviada ao contêiner
    const newMessage = document.createElement("div")
    newMessage.classList.add("message", "sent")
    newMessage.innerHTML = `<p>${inputMessage}</p>`
    messageContainer.appendChild(newMessage)

    // Limpa o campo de entrada
    document.getElementById("input-message").value = ""

    // Aqui você pode implementar a lógica para armazenar ou enviar a mensagem real
    console.log(`Mensagem enviada para ${selectedContact}: ${inputMessage}`)
  }
}

// Adicione o evento de clique aos contatos
document.querySelectorAll(".contact").forEach((contact) => {
  contact.addEventListener("click", () => {
    const contactName = contact.querySelector("span").innerText
    selectContact(contactName)
  })
})

// script.js

let currentContact = null // Armazena o contato selecionado
const chatContainer = document.getElementById("message-container") // Contêiner de mensagens
const currentContactDisplay = document.getElementById("contact-name") // Exibição do nome do contato

// Função para obter mensagens do localStorage
function getMessages(contact) {
  const messages = JSON.parse(localStorage.getItem("messages")) || {}
  return messages[contact] || []
}

// Função para armazenar uma mensagem no localStorage
function saveMessage(contact, message) {
  const messages = JSON.parse(localStorage.getItem("messages")) || {}
  if (!messages[contact]) {
    messages[contact] = []
  }
  messages[contact].push(message)
  localStorage.setItem("messages", JSON.stringify(messages))
}

// Função para selecionar um contato
function selectContact(name) {
  currentContact = name
  currentContactDisplay.textContent = name // Atualiza o título com o nome do contato
  chatContainer.innerHTML = "" // Limpa as mensagens ao selecionar um novo contato

  // Exibe mensagens armazenadas para o contato
  const messages = getMessages(name)
  messages.forEach((msg) => {
    const messageElement = document.createElement("div")
    messageElement.classList.add("message", "received")
    messageElement.innerHTML = `<p>${msg}</p>`
    chatContainer.appendChild(messageElement)
  })
}

// Lida com o envio da mensagem
function sendMessage() {
  const inputMessage = document.getElementById("input-message").value
  if (inputMessage && currentContact) {
    // Adiciona a mensagem enviada ao contêiner
    const newMessage = document.createElement("div")
    newMessage.classList.add("message", "sent")
    newMessage.innerHTML = `<p>${inputMessage}</p>`
    chatContainer.appendChild(newMessage)

    // Salva a mensagem no localStorage
    saveMessage(currentContact, inputMessage)

    // Limpa o campo de entrada
    document.getElementById("input-message").value = ""

    // Aqui você pode implementar a lógica para armazenar ou enviar a mensagem real
    console.log(`Mensagem enviada para ${currentContact}: ${inputMessage}`)
  }
}

// Adiciona eventos de clique e tecla Enter para enviar a mensagem
document.getElementById("send-button").onclick = sendMessage

document
  .getElementById("input-message")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage()
      event.preventDefault() // Evita o comportamento padrão de nova linha
    }
  })

  // Seleciona um GIF (aqui você pode integrar uma API de GIFs, como Giphy)
document.getElementById('gif-button').onclick = function() {
    // Lógica para abrir um seletor de GIFs (ex: usando a API do Giphy)
    alert('Implementar seleção de GIFs');
};

// Seleciona um emoji
document.getElementById('emoji-button').onclick = function() {
    const emoji = prompt('Digite um emoji:'); // Aqui você pode usar um seletor de emojis
    sendMessage(emoji);
};

// Envio de arquivo
document.getElementById('file-button').onclick = function() {
    document.getElementById('file-input').click(); // Abre o seletor de arquivos
};

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const message = `Arquivo enviado: ${file.name}`;
        sendMessage(message); // Envie uma mensagem com o nome do arquivo
        // Aqui você pode implementar lógica para enviar o arquivo para um servidor, se necessário
    }
});
// Adicione o evento de clique aos contatos
document.querySelectorAll(".contact").forEach((contact) => {
  contact.addEventListener("click", () => {
    const contactName = contact.querySelector("span").innerText
    selectContact(contactName)
  })
})
