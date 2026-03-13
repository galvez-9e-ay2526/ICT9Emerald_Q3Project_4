function calculateFare() {
    const baseFare = 13;
    const perStopRate = 13;
    const baseStops = 2;

    let pick = parseInt(document.getElementById("pick").value);
    let drop = parseInt(document.getElementById("drop").value);
    let discount = document.getElementById("discountCheck").checked ? 0.20 : 0;

    let stops = Math.abs(drop - pick);
    let totalFare;

    if (stops <= baseStops) {
        totalFare = baseFare;
    } else {
        let extraStops = stops - baseStops;
        totalFare = baseFare + (extraStops * perStopRate);
    }

    totalFare = totalFare - (totalFare * discount);

    let resultDiv = document.getElementById("fareResult");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Estimated Fare: PHP " + totalFare.toFixed(2);
}
