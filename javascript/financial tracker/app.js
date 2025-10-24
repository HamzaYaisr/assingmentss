// Select DOM elements
var descInput = document.getElementById('desc');
var amountInput = document.getElementById('amount');
var addBtn = document.getElementById('addTransactionBtn');
var transactionList = document.getElementById('transactionList');
var incomeEl = document.getElementById('income');
var expensesEl = document.getElementById('expenses');
var balanceEl = document.getElementById('balance');

// Load transactions from localStorage or start empty
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Initialize UI
updateUI();

// Add new transaction
addBtn.addEventListener('click', () => {
  var desc = descInput.value.trim();
  var amount = amountInput.value.trim();

  if (desc === '' || amount === '') {
    alert('Please enter both description and amount.');
    return;
  }

  var amt = parseFloat(amount);
  if (isNaN(amt)) {
    alert('Amount must be a number.');
    return;
  }

  var newTransaction = {
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    description: desc,
    amount: amt
  };

  transactions.push(newTransaction);
  saveToLocal();
  updateUI();

  // clear inputs
  descInput.value = '';
  amountInput.value = '';
});

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  saveToLocal();
  updateUI();
}

// Save to localStorage
function saveToLocal() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update UI totals and list
function updateUI() {
  transactionList.innerHTML = '';

  let income = 0, expenses = 0;

  transactions.forEach(tx => {
    var row = document.createElement('tr');
    var sign = tx.amount >= 0 ? '+' : '-';
    var amountClass = tx.amount >= 0 ? 'positive' : 'negative';

    row.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.description}</td>
      <td class="amount ${amountClass}">${sign}$${Math.abs(tx.amount).toFixed(2)}</td>
      <td><button class="btn-delete" onclick="deleteTransaction(${tx.id})">x</button></td>
    `;

    transactionList.appendChild(row);

    if (tx.amount >= 0) income += tx.amount;
    else expenses += Math.abs(tx.amount);
  });

  var balance = income - expenses;

  incomeEl.textContent = `$${income.toFixed(2)}`;
  expensesEl.textContent = `$${expenses.toFixed(2)}`;
  balanceEl.textContent = `$${balance.toFixed(2)}`;
}
