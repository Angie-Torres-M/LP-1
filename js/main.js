document.getElementById("btnCalcular").addEventListener("click", ordenarNumeros);

// Función principal que ordena los números cuando el usuario hace clic en "Calcular"
function ordenarNumeros() {
    // Obtener los valores de los inputs y convertirlos a tipo Number
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);

    // Referencias a los elementos del DOM donde se mostrarán mensajes y resultados
    const mensajeError = document.getElementById("mensajeError");
    const mensajeIguales = document.getElementById("mensajeIguales");
    const resultadoMayorMenor = document.getElementById("resultadoMayorMenor");
    const resultadoMenorMayor = document.getElementById("resultadoMenorMayor");
    const detalleMayorMedioMenor = document.getElementById("detalleMayorMedioMenor");

    // Limpiar mensajes previos
    mensajeError.classList.add("d-none");
    mensajeIguales.classList.add("d-none");
    resultadoMayorMenor.textContent = "";
    resultadoMenorMayor.textContent = "";
    detalleMayorMedioMenor.textContent = "";

    // Validación
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        mensajeError.classList.remove("d-none");
        return;
    }

    // Caso: números iguales
    if (n1 === n2 && n2 === n3) {
        mensajeIguales.classList.remove("d-none");

        resultadoMayorMenor.textContent = `Mayor a menor: ${n1}, ${n2}, ${n3}`;
        resultadoMenorMayor.textContent = `Menor a mayor: ${n1}, ${n2}, ${n3}`;
        detalleMayorMedioMenor.textContent = `Mayor: ${n1} | Medio: ${n2} | Menor: ${n3}`;
        return;
    }

    // Calcular mayor, medio y menor
    let mayor, medio, menor;

    if (n1 >= n2 && n1 >= n3) {
        mayor = n1;
        medio = n2 >= n3 ? n2 : n3;
        menor = n2 >= n3 ? n3 : n2;

    } else if (n2 >= n1 && n2 >= n3) {
        mayor = n2;
        medio = n1 >= n3 ? n1 : n3;
        menor = n1 >= n3 ? n3 : n1;

    } else {
        mayor = n3;
        medio = n1 >= n2 ? n1 : n2;
        menor = n1 >= n2 ? n2 : n1;
    }

    // Imprimir resultados
    resultadoMayorMenor.textContent = `Mayor a menor: ${mayor}, ${medio}, ${menor}`;
    resultadoMenorMayor.textContent = `Menor a mayor: ${menor}, ${medio}, ${mayor}`;
    detalleMayorMedioMenor.textContent = `Mayor: ${mayor} | Medio: ${medio} | Menor: ${menor}`;
}
