function convert() {
    let value = Number(document.getElementById("inputValue").value);
    let type = document.getElementById("conversionType").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;

    // Temperature
    if (type === "temp") {
        if (from === "celsius" && to === "fahrenheit") {
            result = (value * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            result = (value - 32) * 5/9;
        } else {
            result = value; // Same unit, no change
        }
    }
    // Length
    else if (type === "length") {
        if (from === "meters" && to === "feet") {
            result = value * 3.28084;
        } else if (from === "feet" && to === "meters") {
            result = value / 3.28084;
        } else {
            result = value;
        }
    }
    // Weight
    else if (type === "weight") {
        if (from === "kg" && to === "lb") {
            result = value * 2.20462;
        } else if (from === "lb" && to === "kg") {
            result = value / 2.20462;
        } else {
            result = value;
        }
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${to}`;
    document.getElementById("inputValue").value = ""; // Clear input field after conversion
}