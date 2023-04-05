function enviarMensagem() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('subject').value;
    const mensagem = document.getElementById('message').value;
  
    // Verifica se todos os campos foram preenchidos
    if (nome !== '' && email !== '' && assunto !== '' && mensagem !== '') {
      // Exibe a mensagem de sucesso
      alert('Sua mensagem foi enviada com sucesso. Obrigado!');
      window.location.href = "./contato_real.html";
    } else {
      // Exibe a mensagem de erro
      alert('Por favor, preencha todos os campos do formulário.');
    }
  }
  
  // Adiciona um event listener ao botão de enviar mensagem
  const botaoEnviar = document.querySelector('button[type="submit"]');
  botaoEnviar.addEventListener('click', enviarMensagem);
  