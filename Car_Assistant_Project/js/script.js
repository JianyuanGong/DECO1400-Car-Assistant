function recommendCar() {
    const typeEl = document.getElementById("type");
    const purposeEl = document.getElementById("purpose");

    // Read values safely
    const type = typeEl ? typeEl.value : "";
    const purpose = purposeEl ? purposeEl.value : "";

    let resultText = "";

    // Basic validation
    if (!type) {
        document.getElementById("result").innerText = "Please select a vehicle type.";
        return;
    }

    // Electric Vehicles
    if (type === "ev") {
        if (purpose === "daily") {
            resultText = "Recommended EV: Tesla Model 3 — efficient and perfect for daily commuting.";
        } else if (purpose === "family") {
            resultText = "Recommended EV: Tesla Model Y — spacious and ideal for families.";
        } else if (purpose === "sport") {
            resultText = "Recommended EV: Hyundai Ioniq 5 N — high-performance electric driving.";
        } else if (purpose === "budget") {
            resultText = "Recommended EV: BYD Dolphin — affordable and practical.";
        } else {
            resultText = "Recommended EV: Tesla Model 3 Long Range — great balance of range and comfort.";
        }
    } 
    // Hybrid Vehicles
    else if (type === "hybrid") {
        if (purpose === "daily") {
            resultText = "Recommended Hybrid: Toyota Camry Hybrid — reliable and fuel efficient.";
        } else if (purpose === "family") {
            resultText = "Recommended Hybrid: Toyota RAV4 Hybrid — great for family and space.";
        } else if (purpose === "sport") {
            resultText = "Recommended Hybrid: Honda Accord Hybrid — sporty yet efficient.";
        } else if (purpose === "budget") {
            resultText = "Recommended Hybrid: Toyota Corolla Hybrid — affordable and efficient.";
        } else {
            resultText = "Recommended Hybrid: Toyota Prius — excellent fuel economy and eco-friendly.";
        }
    } 
    // Fuel Vehicles
    else if (type === "fuel") {
        if (purpose === "daily") {
            resultText = "Recommended Fuel Car: Toyota Corolla — simple and reliable.";
        } else if (purpose === "family") {
            resultText = "Recommended Fuel Car: Hyundai Palisade — spacious SUV for families.";
        } else if (purpose === "sport") {
            resultText = "Recommended Fuel Car: BMW M340i — powerful and sporty driving.";
        } else if (purpose === "budget") {
            resultText = "Recommended Fuel Car: Mazda 3 — affordable with good performance.";
        } else {
            resultText = "Recommended Fuel Car: Mercedes-Benz C-Class — premium and comfortable.";
        }
    } 
    // Fallback
    else {
        resultText = "Recommended: Toyota Corolla";
    }

    // Save result and redirect to result page
    localStorage.setItem("result", resultText);
    window.location.href = "select-result.html";
}