document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.getElementById('inputs-container');
    const result = document.getElementById('result');
    const addNumber = document.getElementById('add-number');
    const changeColor = document.getElementById('change-color');

    const updateSum = () => {
        const inputs = document.querySelectorAll('.number-input');
        let sum = 0;
        inputs.forEach(input => {
            sum += parseInt(input.value) || 0;
        });
        result.textContent = `Resultado: ${sum}`;
    };

    inputs.addEventListener('input', updateSum);

    addNumber.addEventListener('click', () => {
        const newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.value = '0';
        newInput.classList.add('number-input');
        inputs.appendChild(newInput);
        newInput.addEventListener('input', updateSum);
    });

    changeColor.addEventListener('click', () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    });
    updateSum();
});