let contador = 0;
let upgradesBought = 0;
let clickValue = 1;

function incrementScore() {
    contador += clickValue;
    document.getElementById('currentScore').innerText = contador;

    if (ccontador >= 500) {
        alert("Parabéns! Você alcançou 500 pontos. Você venceu!");
        resetGame();
    }
}

function buyUpgrade(cost, value) {
    if (contador >= cost) {
        contador -= cost;
        clickValue += value;
        upgradesBought++;
        document.getElementById('currentScore').innerText = contador;
        alert(`Upgrade comprado! Novo valor de clique: ${clickValue}`);
    } else {
        alert("Pontos insuficientes para comprar este upgrade.");
    }
}

function resetGame() {
    contador = 0;
    upgradesBought = 0;
    clickValue = 1;
    document.getElementById('currentScore').innerText = contador;
}