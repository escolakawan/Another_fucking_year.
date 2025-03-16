document.addEventListener('DOMContentLoaded', function(){
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

  botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta');{
      document.addEventListener('DOMContentLoaded', function() {
        const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
        const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
        const aumentaFonteBotao = document.getElementById('aumentar-fonte');
        const diminuiFonteBotao = document.getElementById('diminuir-fonte');
        const alternaContraste = document.getElementById('alterna-contraste');
    
        botaoDeAcessibilidade.addEventListener('click', function() {
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    
            const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
            botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
        });
    
        aumentaFonteBotao.addEventListener('click', function() {
            // Lógica para aumentar a fonte
        });
    
        diminuiFonteBotao.addEventListener('click', function() {
            // Lógica para diminuir a fonte
        });
    
        alternaContraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });
    
        ScrollReveal().reveal('#inicio', { delay: 500 });
        ScrollReveal().reveal('#tropicalia', { delay: 500 });
        ScrollReveal().reveal('#galeria', { delay: 500 });
        ScrollReveal().reveal('#contato', { delay: 500 });
    });