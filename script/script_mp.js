// Función para calcular la altura máxima (h) en el movimiento parabólico
function calcularAlturaMaxima(event){
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alturaMaxima = calcularAlturaMaximaParabolico(v0, theta, g);
  
    document.getElementById('resultadosAlturaMaxima').innerHTML = `<h3>Altura máxima (h):</h3>${alturaMaxima.toFixed(2)} metros`;
}
  
// Función para calcular el alcance horizontal (R) en el movimiento parabólico
function calcularAlcanceHorizontal(event){
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_2').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_2').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alcanceHorizontal = calcularAlcanceHorizontalParabolico(v0, theta, g);
  
    document.getElementById('resultadosAlcanceHorizontal').innerHTML = `<h3>Alcance horizontal (R):</h3>${alcanceHorizontal.toFixed(2)} metros`;
}
  
// Función para calcular el tiempo de vuelo (t) en el movimiento parabólico
function calcularTiempoVuelo(event){
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_3').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_3').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const tiempoVuelo = calcularTiempoVueloParabolico(v0, theta, g);
  
    document.getElementById('resultadosTiempoVuelo').innerHTML = `<h3>Tiempo de vuelo (t):</h3>${tiempoVuelo.toFixed(2)} segundos`;
}
  
// Función para calcular la altura en función del tiempo (h) en el movimiento parabólico
function calcularAlturaTiempo(event){
    event.preventDefault();
    const v0 = parseFloat(document.getElementById('velocidadInicial_4').value);
    const theta = parseFloat(document.getElementById('anguloLanzamiento_4').value);
    const t = parseFloat(document.getElementById('tiempo').value);
    const g = 9.81; // Asumimos la gravedad estándar en la Tierra en m/s^2
  
    const alturaTiempo = calcularAlturaTiempoParabolico(v0, theta, t, g);
  
    document.getElementById('resultadosAlturaTiempo').innerHTML = `<h3>Altura en función del tiempo (h):</h3>${alturaTiempo.toFixed(2)} metros`;
}

//animacion
// Funciones auxiliares
function calcularAlturaMaximaParabolico(v0, theta, g){
  theta = gradosARadianes(theta);
  return (v0 ** 2 * Math.sin(theta) ** 2) / (2 * g);
}
  
function calcularAlcanceHorizontalParabolico(v0, theta, g){
  theta = gradosARadianes(theta);
  return (v0 ** 2 * Math.sin(2 * theta)) / g;
}
  
function calcularTiempoVueloParabolico(v0, theta, g){
    theta = gradosARadianes(theta);
    return (2 * v0 * Math.sin(theta)) / g;
}
  
function calcularAlturaTiempoParabolico(v0, theta, t, g){
    theta = gradosARadianes(theta);
    return v0 * Math.sin(theta) * t - (1 / 2) * g * t ** 2;
}
  
function gradosARadianes(grados){
    return (grados * Math.PI) / 180;
}

//"use strict"; animacion
  var lapiz, logs, proyectil, explosion, cagnon, g=9.8, offY=0, offX=0;
  var iniAnim=0, oAnim, oAnimNubes, nubes1, ta, objetivo, suelo;

function oProyectil(vel0, tamP, cag){
    this.cx0 = cag.cx + cag.w*Math.cos(cag.ang*Math.PI/180)
    this.cy0 = cag.cy - cag.w*Math.sin(cag.ang*Math.PI/180)
    this.cx = 0;
    this.cy = 0;
    this.vini = vel0
    this.v0 = vel0 + nubes1.v0*10;
    this.ang = cag.ang;
    this.tam = tamP;
    this.max= vel0*vel0*Math.sin(this.ang*Math.PI/90)/g;
    this.tv = 0;
    this.fin = 0;
    this.fondo= null;
      
      this.desplazar = function(t,obj, sue){
        with (this){
        v0 = vini + nubes1.v0;
         if(fondo != null)	
          lapiz.putImageData(fondo, cx - tam-2, cy - tam-2);
        cx = this.cx0 +  v0*Math.cos(ang*Math.PI/180)*tv 
        cy = this.cy0 - 5 - (v0*Math.sin(ang*Math.PI/180) - g*tv/2)*tv;
        
        this.impacto(obj, sue);
        if (fin==0)
          situar()
        tv += 0.2;
        }
      }
       this.situar = function(){
        with (this){
          lapiz.beginPath();
          
          lapiz.fillStyle = "black";
          tam += 2 
          fondo = lapiz.getImageData(cx-tam, cy-tam, 2*tam, 2*tam)	
          tam -= 2
  
          lapiz.arc(cx, cy,tam,0, 2*Math.PI);
          lapiz.fill();
          lapiz.stroke();
          }
        }
      this.impacto = function(obj, sue){	
        //lapiz.stroke(objetivo);
        if (lapiz.isPointInPath(sue, this.cx, this.cy+this.tam) && this.tv>0)
          this.fin = 1
        else if (lapiz.isPointInPath(obj, this.cx, this.cy+this.tam) && this.tv >0) 
              this.fin = 2     
      } 
}
  
function oNubes(img, cx, cy, anc, alt, vel, max){
    this.cx = cx;
    this.cx0 = cx;
    this.max = max
    this.cy = cy;
    this.v0 = vel
    this.w = anc;
    this.h = alt;
    this.tv = 0;
    this.img = document.getElementById(img)
    
    this.fondo= lapiz.getImageData(this.cx, this.cy, this.w+2, this.h+2);
  
    this.desplazar = function(){	  
      lapiz.putImageData(this.fondo, this.cx, this.cy);
      this.cx = this.cx0 + this.v0*this.tv 
      if (this.cx > this.max){
        this.cx = -this.w;
        this.cx0 = -this.w;
        this.tv=0;
        this.fondo= lapiz.getImageData(this.cx, this.cy, this.w, this.h);
        this.v0 = Math.random()*20 - 10
      }
      if (this.cx < -this.w){
        this.cx = this.max;
        this.cx0 = this.max; 
        this.tv=0;
        this.fondo= lapiz.getImageData(this.cx, this.cy, this.w+4, this.h+2);
        this.v0 = Math.random()*20 - 10
      }	
      lapiz.drawImage(this.img, this.cx, this.cy, this.w, this.h);	
      this.tv += 0.2
    }
    this.cambiarVel = function(){
      var inc = Math.random()
  
      if (inc > 0.5)
        this.v0 += inc
      else
        this.v0 -= inc
      this.cx0 = this.cx		
      this.tv = 0
    }    
}
  
function oExplosion(img,et, w, h){
    this.etapa = 0;
    this.inc = Math.PI*et/100
    this.img = document.getElementById(img);;
    this.fondo = null;
    this.cx = 0;
    this.cy = 0;
    this.img.width = w;
    this.img.height = h;
    this.poner = function(x,y){
      this.cx = x;
      this.cy = y;
      this.fondo = lapiz.getImageData(this.cx-this.img.width/2, this.cy-this.img.height/2, this.img.width+2, this.img.height+2);	  
    }
    this.explotar = function(t){
      this.etapa += this.inc;	
      var width  = this.img.width*Math.sin(this.etapa); 
      var height = this.img.height*Math.sin(this.etapa);
      lapiz.putImageData(this.fondo, this.cx-this.img.width/2,  this.cy - this.img.height/2);	
      lapiz.drawImage(this.img, this.cx-width/2, this.cy-height/2,width,height);
    }
}

function oCagnon(cx, cy, img){
    this.cx = cx+5;
    this.cy = cy;
    this.img = document.getElementById(img)
    this.w = 50
    this.h = 41
    
    this.fondo= null
    this.colocar = function(ang){	
    //0.4 (w) y 0.8 (h) para determinar centro de giro depende de la imagen usada
      this.ang = ang;
      lapiz.beginPath()
      ang -= 20;
      if (this.fondo==null){
        this.fondo = lapiz.getImageData(this.cx, this.cy-this.h, this.w+10, this.h+10)
      }
        
      lapiz.putImageData(this.fondo, this.cx, this.cy-this.h)	
    
      lapiz.save()
      lapiz.translate(this.cx+this.w*0.4, this.cy)
      lapiz.rotate(-ang*Math.PI/180)	
      lapiz.drawImage(this.img, -this.w*0.4, -this.h*0.8, this.w, this.h)
      lapiz.restore()
    }
}
  
function oObjetivo(img, posX, posY, w, h){
    this.obj = new Path2D();
    this.img = document.getElementById(img);
    this.width  = w
    this.height = h
    this.cx = posX
    this.cy = posY
    this.fondo = lapiz.getImageData(this.cx, this.cy-this.height, this.width, this.height)
    
    this.cambiaImg = function(img, w,h){
      this.img = document.getElementById(img);
      this.width  = w
      this.height = h
      this.poner()
    }
    this.poner = function(){
      lapiz.putImageData(this.fondo, this.cx, this.cy-this.height)	
      lapiz.drawImage(this.img, this.cx, this.cy-this.height, this.width, this.height)
      this.obj.rect(this.cx,  this.cy-this.height*0.4, this.width, this.height*0.4); //area sensible
    }
}
  
function iniciar(){
    if (iniAnim != 0)
      return
    var marco=document.getElementById("marco")
    lapiz = marco.getContext("2d");
    
    logs = document.getElementById("log")
    lapiz.clearRect(0,0, marco.width, marco.height)
  
    //Offsets en X e Y (origen esquina superior izquierda)
    offX = 0;
    offY = 470;
    
    cagnon = new oCagnon(offX,offY,"cagnon");
    prepCagnon()
    
    explosion = new oExplosion("exp", 2, 80,80)	
  
    var objx = marco.width/2*(1 + Math.random()/2) - 100
    objetivo = new oObjetivo("ciudad", objx, offY, 100, 46)
    objetivo.poner()
    
    suelo = new Path2D();
    suelo.rect(0,offY, marco.width, marco.height/2); //suelo
    
    nubes1 = new oNubes("nubes1", 300, 100, 126, 80, Math.random()*20 - 10, marco.width)
    desplazarNubes(0);
}

function desplazarNubes(t){
    nubes1.desplazar();
    
    oAnimNubes = window.requestAnimationFrame(desplazarNubes);
}

function disparar(){
    if (iniAnim == 0){
      vel = parseFloat(document.getElementById("vel").value);
      nubes1.cambiarVel();
      proyectil = new oProyectil(vel,8, cagnon );	
      
      iniAnim = window.performance.now();
      oAnim = window.requestAnimationFrame(desplazar)
      }
}
  
function prepCagnon(){
    ang = parseFloat(document.getElementById("angulo").value);
    cagnon.colocar(ang)	
}
  
function desplazar(time){
     var t =  Math.round((time - iniAnim)/40); 
     ta += 0.2; 
     proyectil.desplazar(t, objetivo.obj, suelo)
     
     if (proyectil.fin == 0)
      oAnim = window.requestAnimationFrame(desplazar);
     else{
      window.cancelAnimationFrame(oAnim);
      explosion.poner(proyectil.cx, proyectil.cy);
      oAnim = window.requestAnimationFrame(explotar);
      }
}
    
  function explotar(t){
    explosion.explotar(t);
    if (explosion.etapa <= Math.PI)
      oAnim = window.requestAnimationFrame(explotar);
    else{
      iniAnim = 0;
      explosion.etapa=0
      if (proyectil.fin == 2){
        objetivo.cambiaImg("ciudad2", 100, 46);
      }
      window.cancelAnimationFrame(oAnim);
      }
  }