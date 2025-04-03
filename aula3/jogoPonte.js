rodada = 1
while (rodada <= 3) {
  console.log ("Esta é a rodada: " + rodada)
  
  escolhaJogador = prompt("Rodada: " + rodada + ". Qual ponte você irá escolher? 1, 2 ou 3?")
  pisoQuebrado = Math.floor(Math.random()* 3) + 1;
  
  if (escolhaJogador == pisoQuebrado) {
    alert ("O vidro quebrou! Você perdeu!")
    rodada = 1000;
  }
  else{
    alert ("Parabéns, você passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  }
  
  rodada = rodada + 1
}

if (rodada == 4){
 alert ("Você venceu! Parabéns") 
}