// Calculador de velocidad final
function calcularVelocidadFinal(event) {
    event.preventDefault();

    const velocidad_inicial = parseFloat(document.getElementById("velocidad_inicial").value) || 0;
    const aceleracion = parseFloat(document.getElementById("aceleracion").value);
    const tiempo_mrua_vf = parseFloat(document.getElementById("tiempo_mrua_vf").value);

    if (isNaN(velocidad_inicial) || isNaN(aceleracion) || isNaN(tiempo_mrua_vf)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const velocidad_final = velocidad_inicial + aceleracion * tiempo_mrua_vf;

    const resultadosDiv = document.getElementById("resultadosVelocidadFinal");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>La velocidad final sería de ${velocidad_final.toFixed(2)} m/s.</p>
    `;
}

// Calculador de distancia
function calcularDistancia(event) {
    event.preventDefault();

    const velocidad_inicial_dist = parseFloat(document.getElementById("velocidad_inicial_dist").value) || 0;
    const aceleracion_dist = parseFloat(document.getElementById("aceleracion_dist").value);
    const tiempo_mrua_d = parseFloat(document.getElementById("tiempo_mrua_d").value);

    if (isNaN(velocidad_inicial_dist) || isNaN(aceleracion_dist) || isNaN(tiempo_mrua_d)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const distancia = velocidad_inicial_dist * tiempo_mrua_d + 0.5 * aceleracion_dist * Math.pow(tiempo_mrua_d, 2);

    const resultadosDiv = document.getElementById("resultadosDistancia");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>La distancia recorrida sería de aproximadamente ${distancia.toFixed(2)} metros.</p>
    `;
}

// Calculador de tiempo
function calcularTiempo(event) {
    event.preventDefault();

    const velocidad_inicial_tiempo = parseFloat(document.getElementById("velocidad_inicial_tiempo").value) || 0;
    const aceleracion_tiempo = parseFloat(document.getElementById("aceleracion_tiempo").value);
    const velocidad_final = parseFloat(document.getElementById("velocidad_final").value);

    if (isNaN(velocidad_inicial_tiempo) || isNaN(aceleracion_tiempo) || isNaN(velocidad_final)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const tiempo = (velocidad_final - velocidad_inicial_tiempo) / aceleracion_tiempo;

    const resultadosDiv = document.getElementById("resultadosTiempo");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>El tiempo transcurrido sería de aproximadamente ${tiempo.toFixed(2)} segundos.</p>
    `;
}

// Calculador de aceleración
function calcularAceleracion(event) {
    event.preventDefault();

    const velocidad_inicial_aceleracion = parseFloat(document.getElementById("velocidad_inicial_aceleracion").value) || 0;
    const velocidad_final_aceleracion = parseFloat(document.getElementById("velocidad_final_aceleracion").value);
    const tiempo_mrua_a = parseFloat(document.getElementById("tiempo_mrua_a").value);

    if (isNaN(velocidad_inicial_aceleracion) || isNaN(velocidad_final_aceleracion) || isNaN(tiempo_mrua_a)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const aceleracion = (velocidad_final_aceleracion - velocidad_inicial_aceleracion) / tiempo_mrua_a;

    const resultadosDiv = document.getElementById("resultadosAceleracion");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>La aceleración sería de ${aceleracion.toFixed(2)} m/s².</p>
    `;
}