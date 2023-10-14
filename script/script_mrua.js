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

//animacion

const containerMRUA = document.querySelector(".container_a_mrua");
const ballMRUA = document.querySelector(".balldmrua");
const velocityInputMRUA = document.getElementById("velocity-input-mrua");
const accelerationInputMRUA = document.getElementById("acceleration-input-mrua");
const speedDisplay = document.getElementById("speed-display");
let positionMRUA = 0; // Posición inicial de la pelota
let timePassedMRUA = 0; // Tiempo transcurrido inicial
let velocityMRUA = 0; // Velocidad inicial de la pelota
let accelerationMRUA = 0; // Aceleración de la pelota
const timeIntervalMRUA = 10; // Intervalo de tiempo para la animación (ms)
let animationIntervalMRUA;

function animateMRUA() {
  // Obtener la velocidad y la aceleración
  velocityMRUA = parseFloat(velocityInputMRUA.value);
  accelerationMRUA = parseFloat(accelerationInputMRUA.value);

  // Calcular la nueva posición utilizando la ecuación del MRUA
  positionMRUA = 0.5 * accelerationMRUA * Math.pow(timePassedMRUA, 2) + velocityMRUA * timePassedMRUA;

  // Calcular la velocidad en el punto actual
  const currentSpeed = velocityMRUA + accelerationMRUA * timePassedMRUA;
  
  // Actualizar la posición de la pelota
  ballMRUA.style.left = `${positionMRUA}px`;

  // Actualizar la velocidad en pantalla cada 15 metros
  if (Math.floor(positionMRUA) % 15 === 0) {
    speedDisplay.textContent = `${currentSpeed.toFixed(2)} m/s`;
  }

  // Detener la animación si la posición supera cierto límite
  if (positionMRUA >= 500) {
    clearInterval(animationIntervalMRUA);
  }

  timePassedMRUA += timeIntervalMRUA / 1000;
}

function startAnimationMRUA() {
  // Reiniciar valores
  positionMRUA = 0;
  timePassedMRUA = 0;

  // Detener animación anterior si existe
  if (animationIntervalMRUA) {
    clearInterval(animationIntervalMRUA);
  }

  // Iniciar la nueva animación
  animationIntervalMRUA = setInterval(animateMRUA, timeIntervalMRUA);
}