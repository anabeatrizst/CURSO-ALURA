idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("Você não pode jogar esse jogo!");
}

if (idade >= 18) {
  escolhaJogador = prompt("1-Pedra, 2-Papel ou 3-Tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  //Pedra - Pedra = Empate
  //Pedra - Papel = Papel
  //Pedra - Tesura = Pedra

  if (escolhaJogador == escolhaComputador) {
    alert("Empate!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("Computador venceu, escolheu Papel");
    }

    if (escolhaComputador == 3) {
      alert("Você venceu, Computador escolheu Tesoura");
    }
  }

  //Papel - pedra = papel
  //Papel - Tesoura = Tesoura

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      alert("Você venceu, Computador escolheu Pedra");
    }
    if (escolhaComputador == 3) {
      alert("Computador venceu, escolheu Tesoura");
    }
  }
  //Tesoura - Pedra = Pedra
  // Tesoura - Papel = Papel

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      alert("Computador venceu, escolheu Pedra");
    }
    if (escolhaComputador == 2) {
      alert("Você venceu, Computador escolheu Papel");
    }
  }
}
