let initialBalance = 1000; // Saldo iniziale
let currentBalance = initialBalance;
let profitLoss = 0;

// Gestione degli eventi
document.getElementById("buy-button").addEventListener("click", function() {
  executeTrade("buy");
});

document.getElementById("sell-button").addEventListener("click", function() {
  executeTrade("sell");
});

function executeTrade(type) {
  const amount = parseFloat(document.getElementById("amount").value);
  const leverage = parseInt(document.getElementById("leverage").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Inserisci un importo valido.");
    return;
  }

  const priceChange = Math.random() * (0.05) - 0.025; // Variazione del prezzo tra -2.5% e 2.5%

  const profitOrLoss = amount * leverage * priceChange;

  // Aggiornamento saldo
  currentBalance += profitOrLoss;
  profitLoss = profitOrLoss;

  // Visualizza risultato
  document.getElementById("profit-loss").textContent = `Guadagni/Perdite: $${profitLoss.toFixed(2)}`;
  document.getElementById("balance").textContent = `Saldo: $${currentBalance.toFixed(2)}`;
}
