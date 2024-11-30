document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = function () {
        if (document.querySelector('#conType').value == 'c-f') {
            let celsius = parseFloat(document.querySelector('#input').value);
            let fahrenheit = (celsius * 9 / 5) + 32;
            document.querySelector('h2').textContent = 'Výsledek ' + fahrenheit.toFixed(2) + ' °F';
        }
        else if (document.querySelector('#conType').value == 'f-c') { 
            let fahrenheit = parseFloat(document.querySelector('#input').value);
            let celsius = (fahrenheit - 32) * 5 / 9;
            document.querySelector('h2').textContent = 'Výsledek ' + celsius.toFixed(2) + ' °C';
        }
    }
})