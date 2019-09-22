document.querySelector('#calculate').addEventListener('click', calculate);

function calculate() {
    const total = parseFloat(document.querySelector('#total').value);
    const tipPercent = parseFloat(document.querySelector('#tipPercent').value);

    const tipAmount = total * (tipPercent/100);
    const taxRate = 5.5;
    const tax = total * (taxRate/100);

    document.querySelector('#tipAmount').innerHTML = tipAmount.toFixed(2);
    document.querySelector('#taxTotal').innerHTML = tax.toFixed(2);
    document.querySelector('#grandTotal').innerHTML = (total + tipAmount + tax).toFixed(2);
};