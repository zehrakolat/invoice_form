document.getElementById("billForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const taxPercent = parseFloat(document.getElementById("tax").value);
    const price = parseFloat(document.getElementById("price").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);

    // Check for valid input
    if (isNaN(taxPercent) || isNaN(price) || isNaN(tipPercent) || price <= 0 || taxPercent < 0 || taxPercent > 100 || tipPercent < 0 || tipPercent > 100) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Calculate tax (on price)
    const taxAmount = price * (taxPercent / 100);

    // Calculate tip (on price + taxAmount)
    const tipAmount = (price + taxAmount) * (tipPercent / 100);
    
    // Calculate total bill
    const total = price + tipAmount + taxAmount;

    document.getElementById("totalPrice").innerText = price.toFixed(2);
    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("taxAmount").innerText = taxAmount.toFixed(2);
    document.getElementById("totalBill").innerText = total.toFixed(2);
});
