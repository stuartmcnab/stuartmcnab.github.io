function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let convertedTemperature;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = temperature;
        }
    }

    document.getElementById('result').innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
