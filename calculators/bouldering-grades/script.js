function convertGrade() {
    const grade = document.getElementById('grade').value;
    const fromSystem = document.getElementById('fromSystem').value;

    // Define conversion factors for each grading system
    const conversionFactors = {
        v: {
            'VB': 'VB',
            'V0': '4',
            'V1': '5',
            'V2': '5+',
            'V3': '6A',
            'V4': '6A+',
            'V5': '6B',
            'V6': '6B+',
            'V7': '6C',
            'V8': '6C+',
            'V9': '7A',
            'V10': '7A+',
            'V11': '7B',
            'V12': '7B+',
            'V13': '7C',
            'V14': '7C+',
            'V15': '8A',
            'V16': '8A+',
            'V17': '8B',
            'V18': '8B+',
            'V19': '8C',
            'V20': '8C+'
        },
        font: {
            '2': 'V0',
            '3': 'V0+',
            '4': 'V1',
            '4+': 'V1+',
            '5': 'V2',
            '5+': 'V3',
            '6A': 'V3+',
            '6A+': 'V4',
            '6B': 'V5',
            '6B+': 'V5+',
            '6C': 'V6',
            '6C+': 'V7',
            '7A': 'V8',
            '7A+': 'V9',
            '7B': 'V10',
            '7B+': 'V11',
            '7C': 'V12',
            '7C+': 'V13',
            '8A': 'V14',
            '8A+': 'V15',
            '8B': 'V16',
            '8B+': 'V17',
            '8C': 'V18',
            '8C+': 'V19'
        }
    };

    // Convert grade using conversion factors
    const convertedGrade = conversionFactors[fromSystem][grade];

    // Display the result
    document.getElementById('result').innerHTML = `Converted Grade: ${convertedGrade}`;
}
