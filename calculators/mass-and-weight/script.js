function convertWeight() {
    const weight = parseFloat(document.getElementById('weight').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Define conversion factors for each unit
    const conversionFactors = {
        tonne: {
            tonne: 1,
            kg: 1000,
            g: 1000000,
            mg: 1e+6,
            mcg: 1e+9,
            'imperial-ton': 0.984207,
            'us-ton': 1.10231e-3,
            stone: 157.473,
            lbs: 2204.62,
            oz: 35274
        },
        kg: {
            tonne: 1e-3,
            kg: 1,
            g: 1000,
            mg: 1e+6,
            mcg: 1e+9,
            'imperial-ton': 9.8421e-4,
            'us-ton': 1.10231e-6,
            stone: 0.157473,
            lbs: 2.20462,
            oz: 35.274
        },
        g: {
            tonne: 1e-6,
            kg: 1e-3,
            g: 1,
            mg: 1000,
            mcg: 1e+6,
            'imperial-ton': 9.8421e-7,
            'us-ton': 1.10231e-9,
            stone: 1.5747e-4,
            lbs: 0.00220462,
            oz: 0.035274
        },
        mg: {
            tonne: 1e-9,
            kg: 1e-6,
            g: 1e-3,
            mg: 1,
            mcg: 1000,
            'imperial-ton': 9.8421e-10,
            'us-ton': 1.10231e-12,
            stone: 1.5747e-7,
            lbs: 2.2046e-6,
            oz: 3.5274e-5
        },
        mcg: {
            tonne: 1e-12,
            kg: 1e-9,
            g: 1e-6,
            mg: 0.001,
            mcg: 1,
            'imperial-ton': 9.8421e-13,
            'us-ton': 1.10231e-15,
            stone: 1.5747e-10,
            lbs: 2.2046e-9,
            oz: 3.5274e-8
        },
        'imperial-ton': {
            tonne: 1.01605,
            kg: 1016.05,
            g: 1.01605e+6,
            mg: 1.01605e+9,
            mcg: 1.01605e+12,
            'imperial-ton': 1,
            'us-ton': 1.12,
            stone: 160,
            lbs: 2240,
            oz: 35840
        },
        'us-ton': {
            tonne: 907.185,
            kg: 907185,
            g: 9.07185e+5,
            mg: 9.07185e+8,
            mcg: 9.07185e+11,
            'imperial-ton': 0.892857,
            'us-ton': 1,
            stone: 142.857,
            lbs: 2000,
            oz: 32000
        },
        stone: {
            tonne: 6.35029,
            kg: 6.35029e+3,
            g: 6.35029e+6,
            mg: 6.35029e+9,
            mcg: 6.35029e+12,
            'imperial-ton': 0.00625,
            'us-ton': 0.007,
            stone: 1,
            lbs: 14,
            oz: 224
        },
        lbs: {
            tonne: 4.53592e-4,
            kg: 0.453592,
            g: 453.592,
            mg: 4.53592e+5,
            mcg: 4.53592e+8,
            'imperial-ton': 4.46429e-4,
            'us-ton': 5e-4,
            stone: 0.0714286,
            lbs: 1,
            oz: 16
        },
        oz: {
            tonne: 2.83495e-5,
            kg: 0.0283495,
            g: 28.3495,
            mg: 28349.5,
            mcg: 2.83495e+7,
            'imperial-ton': 2.7902e-5,
            'us-ton': 3.125e-5,
            stone: 0.00446429,
            lbs: 0.0625,
            oz: 1
        }
    };

    // Calculate the converted weight
    const convertedWeight = weight * conversionFactors[fromUnit][toUnit];

    // Display the result
    document.getElementById('result').innerHTML = `Converted Weight: ${convertedWeight.toFixed(2)} ${toUnit}`;
}
