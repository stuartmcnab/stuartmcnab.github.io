const calculateBodyFat = () => {
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const weight = parseFloat(document.getElementById('weight').value);

    let bodyFatPercentage = (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450)


    document.getElementById('result').innerHTML = !bodyFatPercentage || bodyFatPercentage === 'NaN' ? 'Please complete all of the fields' : 
    `Body Fat Percentage (YMCA Formula): ${bodyFatPercentage.toFixed(2)}%<br>
    Fat mass: ${((weight * bodyFatPercentage) / 100).toFixed(2)}kg<br>
    Lean body mass: ${(weight - ((weight * bodyFatPercentage) / 100)).toFixed(2)}kg<br>
    BMI: ${(weight/ (height/100 * height/100)).toFixed(2)}`;
}




