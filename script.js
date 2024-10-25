document.getElementById('startButton').addEventListener('click', function() {
    let numero;
    
    do {
        numero = parseInt(prompt("Introduce un número entero entre 0 y 10:"));
        if (isNaN(numero) || numero < 0 || numero > 10) {
            alert("El número introducido no es correcto. Debe estar entre 0 y 10.");
        }
    } while (isNaN(numero) || numero < 0 || numero > 10);

    let factorial = calcularFactorial(numero);
    
    document.getElementById('resultado').textContent = `Factorial de ${numero} = ${factorial}`;
});

function calcularFactorial(n) {
    if (n === 0) return 1; 
    return n * calcularFactorial(n - 1);
}
