const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
      }
  
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    };
  }
  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
  }contadores[0].textContent = calculaTempo(tempoObjetivo1);
  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
  }
  let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    return (
      dias +
      " dias " +
      horas +
      " horas " +
      minutos +
      " minutos " +
      segundos +
      " segundos"
    );
  }
  segundos %= 60;
minutos %= 60;
horas %= 24;