const calculate = document.getElementById('calcular');

function imc() {
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const width = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if (name !== '' && height !== '' && width !== '') {
        const imcCalculation = (width / (height * height) * 10000).toFixed(1);
        console.log(imcCalculation)

        let classification = '';

        if (imcCalculation <= 18.5) {
            classification = 'abaixo do peso';
        }

        if (imcCalculation >= 18.6 && imcCalculation <= 24.9) {
            classification = 'com o peso normal';
        }
        if (imcCalculation >= 25 && imcCalculation <= 29.9) {
            classification = 'com sobrepeso';
        }
        if (imcCalculation >= 30 && imcCalculation <= 39.9) {
            classification = 'com obesidade';
        }
        if (imcCalculation >= 40) {
            classification = 'com obesidade grave. Cuidado';
        }

        result.textContent = `${name}, seu IMC é ${imcCalculation}.\n Você pode estar ${classification}.`;
    }
}

calculate.addEventListener('click', imc)
