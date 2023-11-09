let heroi = 'Oryon';
let currentExp = 0;
const totalExp = 10000;
let jogando = true;

function calculoGanhoPerdaXP(currentExp, jogada, limite){
    if(jogada < 4){
        const reducao = Math.round((currentExp-limite) * 0.1);
        currentExp -= reducao;
        currentExp = Math.max(currentExp, limite);
    }else{
        currentExp += 200;
    }
    return currentExp
}

function statusAtual(xpAtual) {
    let Nivel = "";
  
    if (xpAtual <= 1000) {
      Nivel = "Ferro";
    } else if (xpAtual <= 2000) {
      Nivel = "Bronze";
    } else if (xpAtual <= 5000) {
      Nivel = "Prata";
    } else if (xpAtual <= 7000) {
      Nivel = "Ouro";
    } else if (xpAtual <= 8000) {
      Nivel = "Patina";
    } else if (xpAtual <= 9000) {
      Nivel = "Ascendente";
    } else if (xpAtual <= 10000) {
      Nivel = "Imortal";
    } else {
      Nivel = "Radiante";
    }
  
    return Nivel;
  }

function executeLoop() {
  
    process.stdout.clearLine(); // Limpa a linha anterior
    process.stdout.cursorTo(0); // Move o cursor para a coluna 0

    let jogada = Math.floor(Math.random() * 11);

    switch (jogando) {
      case currentExp <= 1000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=0)
        break;
      case currentExp < 2000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=1000)
        break;
      case currentExp < 5000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=2000)
        break;
      case currentExp < 7000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=5000)
        break;
      case currentExp < 8000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=7000)
        break;
      case currentExp < 9000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=8000)
        break;
      case currentExp < 10000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=9000)
        break;
      default:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=10000)
    }
    
    process.stdout.write('O herói de nome ' + heroi + ' está no nivel ' + statusAtual(currentExp) + '. Progresso da XP ' + currentExp + '/' + totalExp);

    setTimeout(executeLoop, 1000);
  
}
executeLoop()