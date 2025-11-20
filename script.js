// script.js
console.log('script.js cargado — inicializando lienzo');

const TAMANO_POR_DEFECTO = 16; // tamano inicial
const TAMANO_MAXIMO = 100; // limite recomendado
const contenedor = document.getElementById('gridContainer');
const botonNuevoLienzo = document.getElementById('newGridBtn');
const checkColorAleatorio = document.getElementById('randomColor');
const checkOscurecer = document.getElementById('darkenMode');

if (!contenedor) {
  console.error('No se encontró el contenedor #gridContainer. ¿Está enlazado el HTML?');
}

// Mantener estado de dibujo (permite dibujar mientras se arrastra)
let estaDibujando = false;

// Limpiar contenedor
function limpiarContenedor() {
  while (contenedor.firstChild) contenedor.removeChild(contenedor.firstChild);
}

// Generar color aleatorio
function rgbAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Para el modo oscurecer: incrementa opacidad o reduce brillo
function oscurecerCelda(celda) {
  // Guardar opacidad actual en data-* o iniciarla
  let actual = parseFloat(celda.getAttribute('data-oscuro')) || 0;
  if (actual < 1) {
    actual = Math.min(1, actual + 0.1);
    celda.setAttribute('data-oscuro', actual.toString());
    celda.style.backgroundColor = `rgba(0,0,0,${actual})`;
  }
}

// Pinta una celda segun los modos seleccionados
function pintarCelda(celda) {
  if (checkOscurecer && checkOscurecer.checked) {
    oscurecerCelda(celda);
    return;
  }

  if (checkColorAleatorio && checkColorAleatorio.checked) {
    // si ya tiene opacidad de oscurecer, reseteamos
    celda.style.backgroundColor = rgbAleatorio();
    celda.style.opacity = '1';
    celda.removeAttribute('data-oscuro');
    return;
  }

  // Modo por defecto: color fijo (negro)
  celda.style.backgroundColor = '#222';
  celda.style.opacity = '1';
}

// Crea un lienzo NxN dentro del contenedor, manteniendo el tamano total del contenedor
function crearLienzo(tamano = TAMANO_POR_DEFECTO) {
  if (!contenedor) return;
  limpiarContenedor();

  const total = tamano * tamano;

  for (let i = 0; i < total; i++) {
    const celda = document.createElement('div');
    celda.className = 'grid-cell';
    celda.setAttribute('data-index', i);
    celda.setAttribute('data-oscuro', '0');

    // Eventos de pintura
    celda.addEventListener('mouseenter', () => {
      // Si se entra con el boton del raton presionado o por hover dejamos rastro
      pintarCelda(celda);
    });

    // Permitir pintar tambien al arrastrar con el raton presionado
    celda.addEventListener('mousedown', () => {
      estaDibujando = true;
      pintarCelda(celda);
    });
    celda.addEventListener('mouseup', () => { estaDibujando = false; });

    // Si el usuario arrastra (mousemove) y esta en estado estaDibujando
    celda.addEventListener('mousemove', () => {
      if (estaDibujando) pintarCelda(celda);
    });

    contenedor.appendChild(celda);
  }

  // Ajustar las dimensiones relativas de cada celda segun tamano
  const celdas = contenedor.querySelectorAll('.grid-cell');
  celdas.forEach((c) => {
    c.style.flex = `0 0 calc(100% / ${tamano})`;
    c.style.height = `calc(100% / ${tamano})`;
  });

  console.log(`Lienzo ${tamano}x${tamano} creado (${total} celdas)`);
}

// Boton para nuevo lienzo
if (botonNuevoLienzo) {
  botonNuevoLienzo.addEventListener('click', () => {
    let entrada = prompt(`Introduce el numero de cuadrados por lado (max ${TAMANO_MAXIMO}):`, `${TAMANO_POR_DEFECTO}`);
    if (entrada === null) return; // cancel
    entrada = Number(entrada);
    if (Number.isNaN(entrada) || entrada < 1) {
      alert('Introduce un numero valido mayor o igual a 1');
      return;
    }
    if (entrada > TAMANO_MAXIMO) {
      alert(`El tamano maximo permitido es ${TAMANO_MAXIMO}. Se usara ${TAMANO_MAXIMO}.`);
      entrada = TAMANO_MAXIMO;
    }
    crearLienzo(entrada);
  });
}

// Manejar mouse global para soporte de arrastre fuera de celdas
document.body.addEventListener('mouseup', () => { estaDibujando = false; });

// Iniciar con el tamano por defecto y marcar el contenedor como dibujable
crearLienzo(TAMANO_POR_DEFECTO);
contenedor.classList.add('drawing');
