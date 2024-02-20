function convertDistance() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Define conversion factors for each unit
    const conversionFactors = {
        m: {
            m: 1,
            km: 0.001,
            cm: 100,
            mm: 1000,
            mi: 0.000621371,
            yd: 1.09361,
            ft: 3.28084,
            in: 39.3701
        },
        km: {
            m: 1000,
            km: 1,
            cm: 100000,
            mm: 1e+6,
            mi: 0.621371,
            yd: 1093.61,
            ft: 3280.84,
            in: 39370.1
        },
        cm: {
            m: 0.01,
            km: 0.00001,
            cm: 1,
            mm: 10,
            mi: 6.2137e-6,
            yd: 0.0109361,
            ft: 0.0328084,
            in: 0.393701
        },
        mm: {
            m: 0.001,
            km: 1e-6,
            cm: 0.1,
            mm: 1,
            mi: 6.2137e-7,
            yd: 0.00109361,
            ft: 0.00328084,
            in: 0.0393701
        },
        mi: {
            m: 1609.34,
            km: 1.60934,
            cm: 160934,
            mm: 1.60934e+6,
            mi: 1,
            yd: 1760,
            ft: 5280,
            in: 63360
        },
        yd: {
            m: 0.9144,
            km: 0.0009144,
            cm: 91.44,
            mm: 914.4,
            mi: 0.000568182,
            yd: 1,
            ft: 3,
            in: 36
        },
        ft: {
            m: 0.3048,
            km: 0.0003048,
            cm: 30.48,
            mm: 304.8,
            mi: 0.000189394,
            yd: 0.333333,
            ft: 1,
            in: 12
        },
        in: {
            m: 0.0254,
            km: 2.54e-5,
            cm: 2.54,
            mm: 25.4,
            mi: 1.5783e-5,
            yd: 0.0277778,
            ft: 0.0833333,
            in: 1
        }
    };

    // Calculate the converted distance
    const convertedDistance = distance * conversionFactors[fromUnit][toUnit];

    // Display the result
    document.getElementById('result').innerHTML = `Converted Distance: ${convertedDistance.toFixed(2)} ${toUnit}`;
}
