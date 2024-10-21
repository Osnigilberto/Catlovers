document
  .getElementById('settingsForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const userId = 1; // Id do usuário logado
    const formData = {
      emailNotifications: document.getElementById('emailNotifications').checked,
      pushNotifications: document.getElementById('pushNotifications').checked,
      privateProfile: document.getElementById('privateProfile').checked,
      messageRequests: document.getElementById('messageRequests').checked,
      contentLanguage: document.getElementById('contentLanguage').value,
      showMatureContent: document.getElementById('showMatureContent').checked,
    };

    try {
      const response = await fetch(`/settings/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Configurações atualizadas com sucesso!');
        window.location.href = '/feed'; // Redirecionar após salvar
      } else {
        alert('Erro ao atualizar configurações.');
      }
    } catch (err) {
      alert('Erro na comunicação com o servidor.');
    }
  });
