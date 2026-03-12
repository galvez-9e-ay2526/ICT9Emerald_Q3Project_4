function calculateFare() {
    let pick = parseFloat(document.getElementById('pick').value);
    let drop = parseFloat(document.getElementById('drop').value);
    let discountApplied = document.getElementById('discountCheck').checked;

    if (isNaN(pick) || isNaN(drop) || pick < 0 || drop < 0) {
        alert('Please enter valid positive numbers for both locations.');
        return;
    }

    let distance = Math.abs(drop - pick);
    const baseFare = 50;
    const perKmRate = 15;
    const baseKm = 2;

    let fare = baseFare;
    if (distance > baseKm) {
        fare += (distance - baseKm) * perKmRate;
    }

    if (discountApplied) {
        fare *= 0.8; // 20% off
    }

    let resultDiv = document.getElementById('fareResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = Total Fare: <strong>₱${fare.toFixed(2)}</strong>;
}
