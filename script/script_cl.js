const gravedad = 9.8; // Aceleración de la gravedad en m/s²

// Calculador de altura
function calcularAltura(event) {
    event.preventDefault();
    const tiempo_caida = parseFloat(document.getElementById("tiempo_caida").value);

    if (isNaN(tiempo_caida) || tiempo_caida <= 0) {
        alert("Por favor, ingrese un valor numérico válido para el tiempo de caída.");
        return;
    }
    const altura_caida = 0.5 * gravedad * Math.pow(tiempo_caida, 2);
    const resultadosDiv = document.getElementById("resultadosAltura");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Después de ${tiempo_caida} segundos de caída, la altura sería de aproximadamente ${altura_caida.toFixed(2)} metros.</p>`;
}

// Calculador de tiempo de caída
function calcularTiempoCaida(event) {
    event.preventDefault();
    const altura_caida = parseFloat(document.getElementById("altura_caida").value);

    if (isNaN(altura_caida) || altura_caida <= 0) {
        alert("Por favor, ingrese un valor numérico válido para la altura de caída.");
        return;
    }
    const tiempo_caida = Math.sqrt((2 * altura_caida) / gravedad);
    const resultadosDiv = document.getElementById("resultadosTiempoCaida");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Para caer desde una altura de ${altura_caida} metros, el tiempo de caída sería de aproximadamente ${tiempo_caida.toFixed(2)} segundos.</p>`;
}

// Calculador de velocidad máxima
function calcularVelocidadMaxima(event){
    event.preventDefault();

    const altura_maxima = parseFloat(document.getElementById("altura_maxima").value);

    if (isNaN(altura_maxima) || altura_maxima <= 0){
        alert("Por favor, ingrese un valor numérico válido para la altura máxima.");
        return;
    }
    const velocidad_maxima = Math.sqrt(2 * gravedad * altura_maxima);
    const resultadosDiv = document.getElementById("resultadosVelocidadMaxima");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>La velocidad máxima alcanzada desde una altura de ${altura_maxima} metros sería de aproximadamente ${velocidad_maxima.toFixed(2)} m/s.</p>`;
}

//animcion cl
const container = document.querySelector(".container_a_cl");
    const ball = document.querySelector(".ball");
    const gravityInput = document.getElementById("gravity-input");
    let position = 0; // Posición inicial de la pelota
    let velocity = 0; // Velocidad inicial de la pelota
    let gravity = parseFloat(gravityInput.value); // Aceleración gravitacional (m/s^2)
    const timeInterval = 10; // Intervalo de tiempo para la animación (ms)
    let animationInterval;
    
    function animate(){
        // Calcular la nueva posición y velocidad utilizando las ecuaciones cinemáticas
        velocity += (gravity*10) * (timeInterval / 1000);
        position += velocity * (timeInterval / 1000);
        // Actualizar la posición de la pelota
        ball.style.top = `${position}px`;
        // Verificar si la pelota ha alcanzado el borde inferior del contenedor
        const containerHeight = container.clientHeight;
        const ballHeight = ball.clientHeight;
        if (position + ballHeight >= containerHeight) {
            // Si ha alcanzado el borde inferior, detener la animación
            clearInterval(animationInterval);
        }
    }
    
    function startAnimation(){
      // Reiniciar la posición y velocidad
      position = 0;
      velocity = 0;
      // Actualizar la gravedad con el valor ingresado por el usuario
      gravity = parseFloat(gravityInput.value);
      // Detener la animación anterior si existe
      if (animationInterval){
        clearInterval(animationInterval);
      }
      // Iniciar la nueva animación
      animationInterval = setInterval(animate, timeInterval);
    }