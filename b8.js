function convertWeight(value, unit) {
    value = parseFloat(value);

    if (isNaN(value)) {
        resetInputs(unit);
        return;
    }

    switch (unit) {
        case 'kg':
            document.getElementById('g').value = value * 1000;
            document.getElementById('lb').value = value * 2.20462;
            document.getElementById('oz').value = value * 35.274;
            document.getElementById('stones').value = value * 0.157473;
            break;

        case 'g':
            document.getElementById('kg').value = value / 1000;
            document.getElementById('lb').value = (value / 1000) * 2.20462;
            document.getElementById('oz').value = (value / 1000) * 35.274;
            document.getElementById('stones').value = (value / 1000) * 0.000157473;
            break;

        case 'lb':
            document.getElementById('kg').value = value / 2.20462;
            document.getElementById('g').value = (value / 2.20462) * 1000;
            document.getElementById('oz').value = (value / 2.20462) * 16;
            document.getElementById('stones').value = (value / 2.20462) * 0.0714286;
            break;

        case 'oz':
            document.getElementById('kg').value = value / 35.274;
            document.getElementById('g').value = (value / 35.274) * 1000;
            document.getElementById('lb').value = (value / 35.274) / 16;
            document.getElementById('stones').value = (value / 35.274) * 0.00446429;
            break;

        case 'stones':
            document.getElementById('kg').value = value / 0.157473;
            document.getElementById('g').value = (value / 0.000157473) * 1000;
            document.getElementById('lb').value = (value / 0.0714286) * 14;
            document.getElementById('oz').value = (value / 0.00446429) * 224;
            break;

        default:
            resetInputs(unit);
            break;
    }
}

function resetInputs(exclude) {
    const units = ['kg', 'g', 'lb', 'oz', 'stones'];
    units.forEach(unit => {
        if (unit !== exclude) {
            document.getElementById(unit).value = '';
        }
    });
}
