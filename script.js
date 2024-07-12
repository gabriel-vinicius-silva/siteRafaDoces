function enviarFormularioParaWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    const textoFormulario = `*Nome:* ${nome}\n*Email:* ${email}\n*Mensagem:* ${mensagem}`;
    const textoFormularioCodificado = encodeURIComponent(textoFormulario);
  
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=+558499596721&text=${textoFormularioCodificado}&text=Olá,%20Rafa%20Doces!%20Tenho%20uma%20mensagem%20para%20você:%0A`;
  
    window.location.href = linkWhatsApp;
  }
  