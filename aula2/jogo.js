function jogar() {
    idade = prompt("Qual a sua idade?");
    
    if (idade < 18) {
        alert ("Infelizmente você não poderá jogar!")
    }
    if (idade >= 18){
        alert ("Que legal! Você pode começar á jogar!")
    }

    if (idade >= 18) {
        escolhaJogador = prompt ("Escolha entre 1-PAR e 2-ÍMPAR").toLowerCase();
        numeroJogador = prompt ("Escolha um número entre 1 e 10")
        escolhaComputador = Math.floor (Math.random()*10) + 1;
        }

    soma = parseInt(numeroJogador) + parseInt(escolhaComputador)
    alert ("Você escolheu o número " + numeroJogador + (" e a Maquina escolheu o número ") + escolhaComputador)
    alert ("A soma é " + soma)

    resultado = soma % 2 === 0 ? "par" : "ímpar";

    if (resultado === escolhaJogador) {
        alert ("Você ganhou, pois a soma dos números escolhidos foi " + resultado)
    }
    if (resultado !== escolhaJogador) {
        alert ("Você perdeu, pois a soma dos números esolhidos foi " + resultado)
    }
}
