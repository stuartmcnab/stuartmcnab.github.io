const calculateBodyFat = () => {
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);

    let bodyFatPercentage = (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450).toFixed(0)

    document.getElementById('result').innerHTML = `Body Fat Percentage (YMCA Formula): ${bodyFatPercentage}%`;
}




