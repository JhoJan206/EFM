// Función para calcular la altura máxima (h) en el movimiento parabólico
function calcularAlturaMaxima(event) {
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alturaMaxima = calcularAlturaMaximaParabolico(v0, theta, g);
  
    document.getElementById('resultadosAlturaMaxima').innerHTML = `<h3>Altura máxima (h):</h3>${alturaMaxima.toFixed(2)} metros`;
  }
  
  // Función para calcular el alcance horizontal (R) en el movimiento parabólico
  function calcularAlcanceHorizontal(event) {
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_2').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_2').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alcanceHorizontal = calcularAlcanceHorizontalParabolico(v0, theta, g);
  
    document.getElementById('resultadosAlcanceHorizontal').innerHTML = `<h3>Alcance horizontal (R):</h3>${alcanceHorizontal.toFixed(2)} metros`;
  }
  
  // Función para calcular el tiempo de vuelo (t) en el movimiento parabólico
  function calcularTiempoVuelo(event) {
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_3').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_3').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const tiempoVuelo = calcularTiempoVueloParabolico(v0, theta, g);
  
    document.getElementById('resultadosTiempoVuelo').innerHTML = `<h3>Tiempo de vuelo (t):</h3>${tiempoVuelo.toFixed(2)} segundos`;
  }
  
  // Función para calcular la altura en función del tiempo (h) en el movimiento parabólico
  function calcularAlturaTiempo(event) {
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_4').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_4').value);
    const t = parseFloat(document.getElementById('tiempo').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alturaTiempo = calcularAlturaTiempoParabolico(v0, theta, t, g);
  
    document.getElementById('resultadosAlturaTiempo').innerHTML = `<h3>Altura en función del tiempo (h):</h3>${alturaTiempo.toFixed(2)} metros`;
  }
  
  // Funciones auxiliares
  function calcularAlturaMaximaParabolico(v0, theta, g) {
    theta = gradosARadianes(theta);
    return (v0 ** 2 * Math.sin(theta) ** 2) / (2 * g);
  }
  
  function calcularAlcanceHorizontalParabolico(v0, theta, g) {
    theta = gradosARadianes(theta);
    return (v0 ** 2 * Math.sin(2 * theta)) / g;
  }
  
  function calcularTiempoVueloParabolico(v0, theta, g) {
    theta = gradosARadianes(theta);
    return (2 * v0 * Math.sin(theta)) / g;
  }
  
  function calcularAlturaTiempoParabolico(v0, theta, t, g) {
    theta = gradosARadianes(theta);
    return v0 * Math.sin(theta) * t - (1 / 2) * g * t ** 2;
  }
  
  function gradosARadianes(grados) {
    return (grados * Math.PI) / 180;
  }
  