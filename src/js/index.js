/*  O que vamos fazer: 
Selecionar e mostrar a imagem correspondente ao botão que n´so clicamos

Paaso 1: armazenar os botoes do aplicativo
         armazenar as imagens do aplicativo
 Passo 2: identificsr o botão que está selecionado
 Passo 3: identificar o botão clicado
 Passo 4: retirar selecionado a classe do botão 
 Passo 5: colocar selecionado no botasão clicado
 Passo 6: Esconder a imagem anterior
 Paaso 6: Ativar a imagem correspondente ao botão.

// Paaso 1: armazenar os botoes do aplicativo */
const botoesCarrossel = document.querySelectorAll(".botao");
const imagensCarrossel = document.querySelectorAll(".imagem");

// Rodar o array de botões e identificar o botão clicado
botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener('click', () => {
        // identificsr o botão que está selecionado
        removerSelecionadoDeBotao();
        // colocar selecionado no botasão clicado
        selecionarBotaoClicado(botao);
        // Esconder a imagem anterior
        removerAtivaDeImagem();
        // Ativar a imagem correspondente ao botão.
        mostrarImagemDeFundo(indice);

        
   })
})


// FUÇÕES REFATORADAS INTERNAS AO LOOP FOREACH

function mostrarImagemDeFundo(indice) {
    imagensCarrossel[indice].classList.add('ativa');
}

function removerAtivaDeImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function removerSelecionadoDeBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

