/////////////////////////////////////////////////////////////////////////////////////////////////////////

//calculador de velocidad

  function calcularVelocidad(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const distancia_mru_v = parseFloat(document.getElementById("distancia_mru_v").value);
    const tiempo_mru_v = parseFloat(document.getElementById("tiempo_mru_v").value);

    // Verificar si los valores son válidos
    if (isNaN(distancia_mru_v) || isNaN(tiempo_mru_v)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    // Calcular la velocidad
    const velocidad_mru_v = distancia_mru_v / tiempo_mru_v;

    // Mostrar los resultados
    const resultadosDiv = document.getElementById("resultadosVelocidad");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>Al recorrer ${distancia_mru_v}m en ${tiempo_mru_v}s, la velocidad sería: ${velocidad_mru_v.toFixed(2)}m/s</p>
    `;
  }

//calculador de distancia

  function calcularDistancia(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const velocidad_mru_d = parseFloat(document.getElementById("velocidad_mru_d").value);
    const tiempo_mru_d = parseFloat(document.getElementById("tiempo_mru_d").value);

    // Verificar si los valores son válidos
    if (isNaN(velocidad_mru_d) || isNaN(tiempo_mru_d)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    // Calcular la distancia
    const distancia_mru_d = velocidad_mru_d * tiempo_mru_d;

    // Mostrar los resultados
    const resultadosDiv = document.getElementById("resultadosDistancia");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>Con una velocidad de ${velocidad_mru_d}m/s durante ${tiempo_mru_d}s, la distancia recorrida sería: ${distancia_mru_d.toFixed(2)}m</p>
    `;
  }

//calculador de tiempo

  function calcularTiempo(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const distancia_mru_t = parseFloat(document.getElementById("distancia_mru_t").value);
    const velocidad_mru_t = parseFloat(document.getElementById("velocidad_mru_t").value);

    // Verificar si los valores son válidos
    if (isNaN(distancia_mru_t) || isNaN(velocidad_mru_t)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    // Calcular el tiempo
    const tiempo_mru_t = distancia_mru_t / velocidad_mru_t;

    // Mostrar los resultados
    const resultadosDiv = document.getElementById("resultadosTiempo");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>Para recorrer ${distancia_mru_t}m con una velocidad de ${velocidad_mru_t}m/s, se tardaría aproximadamente ${tiempo_mru_t.toFixed(2)}s</p>
    `;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////