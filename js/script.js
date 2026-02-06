const form = document.getElementById("formContato");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Pegando valores do formulário
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  // Número oficial do WhatsApp da empresa
  const numeroWhatsApp = "5554992361064";

  // Texto enviado
  const texto = `Olá! Meu nome é ${nome}.
Telefone: ${telefone}.
Mensagem: ${mensagem}`;

  // Criar link do WhatsApp
  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    texto,
  )}`;

  // Abrir WhatsApp em nova aba
  window.open(link, "_blank");
});
