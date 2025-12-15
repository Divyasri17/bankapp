let bal = 0;
const output = document.getElementById("output");

//-------------- Balance --------------
function balance() {
  output.innerText = "💰 Balance is: " + bal;
}

//------------- Deposit -----------------------
function deposit(amount) {
  bal = bal + amount;
  output.innerText =
    "✅ Amount deposited successfully\nUpdated Balance: " + bal;
}

//------------------ Withdraw ------------------------------
function Withdraw(amount) {
  let req = bal - amount;
  if (req < 0) {
    output.innerText =
      "❌ You don't have enough balance\nWithdrawal failed";
  } else {
    bal = bal - amount;
    output.innerText = "✅ Updated Balance: " + bal;
  }
}

//----------------- Interest ----------------
function interset(amount, interset_rate = 2, years = 1) {
  let si = (amount * years * interset_rate) / 100;
  output.innerText = `📈 Interest for ${amount} is ${si}`;
}

// -------- Button Functions --------
function checkBalance() {
  balance();
}

function depositMoney() {
  let amt = Number(prompt("Enter deposit amount:"));
  if (amt > 0) deposit(amt);
  else output.innerText = "❌ Invalid amount";
}

function withdrawMoney() {
  let amt = Number(prompt("Enter withdrawal amount:"));
  if (amt > 0) Withdraw(amt);
  else output.innerText = "❌ Invalid amount";
}

function calculateInterest() {
  let amo = Number(prompt("Enter amount:"));
  let year = Number(prompt("Enter years (default 1):")) || 1;
  let rate = Number(prompt("Enter interest rate (default 2):")) || 2;

  if (amo > 0) interset(amo, rate, year);
  else output.innerText = "❌ Invalid amount";
}
