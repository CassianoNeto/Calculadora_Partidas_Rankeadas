let heroi = 'Oryon';
let totalVitorias = 0;
const jogando = true;

function CalcularRanking(totalVitorias, jogada){
    if(jogada <= 4){
        totalVitorias = (totalVitorias - 1) <= 0 ? 0 : totalVitorias -= 1;
    }else{
        totalVitorias += 1;
    }
    return totalVitorias;
}

function statusAtual(totalVitorias) {
    let Nivel = "";
  
    if (totalVitorias <= 10) {
      Nivel = "Ferro";
    } else if (totalVitorias <= 20) {
      Nivel = "Bronze";
    } else if (totalVitorias <= 50) {
      Nivel = "Prata";
    } else if (totalVitorias <= 80) {
      Nivel = "Ouro";
    } else if (totalVitorias <= 90) {
      Nivel = "Diamante";
    } else if (totalVitorias <= 100) {
        Nivel = "Lendario";
    } else {
      Nivel = "Imortal";
    }
  
    return Nivel;
  }

function executeLoop() {
  
    

        process.stdout.clearLine(); // Limpa a linha anterior
        process.stdout.cursorTo(0); // Move o cursor para a coluna 0
    
        let jogada = Math.floor(Math.random() * 11);
        totalVitorias = CalcularRanking(totalVitorias, jogada)
       
        
        process.stdout.write('O herói tem o saldo de ' + totalVitorias + ' vitórias, está no nivel de ' + statusAtual(totalVitorias));
    
        if (totalVitorias >= 100) {
            jogando = false; // Encerra o jogo se atingir mais de 100 vitórias
        }
        if (jogando) {
            setTimeout(executeLoop, 1000);
        }
    

}

executeLoop();