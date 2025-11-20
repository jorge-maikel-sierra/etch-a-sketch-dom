# etch-a-sketch-dom

Proyecto de ejemplo: cuadrícula generada dinámicamente con JavaScript y estilizada con Flexbox.

## Archivos principales

- `index.html` — contiene el contenedor `#gridContainer` y enlaza `styles.css` y `script.js`.
- `styles.css` — estilos para el contenedor y las celdas usando Flexbox.
- `script.js` — genera NxN `div.grid-cell` dinámicamente y añade interacciones (hover/click) y logs.

## Cómo probarlo

1. Abre `index.html` en tu navegador (doble clic o arrastrar al navegador).
2. Abre las herramientas de desarrollador (DevTools):
   - Consola: mira los mensajes que indiquen que `script.js` se ha cargado y que se creó el lienzo (p.ej. "Lienzo 16x16 creado (... celdas)").
   - Panel Elementos / Inspector: busca `#gridContainer` y debería contener N×N `div.grid-cell`.

Si la cuadrícula no aparece, comprueba lo siguiente:

- ¿Está enlazada la hoja de estilos? Revisa en el panel Elements que `styles.css` se haya cargado.
- ¿Hay errores en la consola de JavaScript? Si `script.js` no se carga, la consola mostrará un error.
- Margen/border/gap: Si cambias `gap`, `border` o `box-sizing`, los tamaños de las celdas pueden dejar de ser cuadrados.

## Notas de desarrollo

- El contenedor tiene tamaño fijo (960×960) en la versión actual para que las celdas calculadas con porcentajes sean exactamente cuadradas. Puedes cambiarlo en `styles.css`.
- Usamos Flexbox (flex-wrap) para practicar su comportamiento en filas y columnas. No se ha usado CSS Grid intencionalmente.

Esta es una implementación web del estilo Etch-A-Sketch / bloc de dibujo, construida con HTML, CSS y JavaScript. El objetivo principal es practicar y dominar la manipulación del DOM, la gestión de eventos y la generación dinámica de cuadrículas.

## Depuración con Visual Studio Code (paso a paso)

He añadido una configuración de VS Code para facilitar la depuración del proyecto en Chrome.

Archivos generados en `.vscode/`:

- `launch.json` — configuración para lanzar Chrome apuntando a `http://localhost:8080/index.html` y para adjuntar al puerto remoto.
- `tasks.json` — tarea `serve` que inicia un servidor estático local en el puerto 8080 usando `npx http-server` (con fallback a `python3 -m http.server`).

### Pasos para depurar

1. Abre la carpeta del proyecto en VS Code.
2. Abre la vista Run and Debug (Ctrl+Shift+D / Run y Depurar).
3. Selecciona la configuración "Abrir en Chrome (lienzo)" y presiona F5.
   - Esto ejecutará la tarea `serve` y luego abrirá Chrome con el depurador conectado.
4. Coloca breakpoints en `script.js` (haz clic en la goma de la izquierda junto al número de línea).
5. Interactúa con la página en la ventana de Chrome; cuando el flujo llegue al breakpoint la ejecución se pausará y podrás inspeccionar variables en la sección VARIABLES.
6. Usa el Debug Console para evaluar expresiones durante la sesión de depuración.

### Consejos útiles

- Usa logpoints si quieres registrar información sin pausar la ejecución (click derecho en la margen → Add Logpoint).
- Para condiciones avanzadas usa conditional breakpoints (Add Conditional Breakpoint) y hit counts.
- Si necesitas depurar varios objetivos (por ejemplo, servidor y cliente), inicia múltiples configuraciones y cambia el objetivo activo en la barra de herramientas de depuración.

### Problemas comunes y soluciones rápidas

- Si `launch.json` no abre Chrome: revisa que no haya otra instancia de Chrome con el mismo `userDataDir`. Cierra instancias de Chrome y prueba de nuevo.
- Si `serve` falla porque `http-server` no está instalado, instala usando `npm i -g http-server` o elige la tarea `serve:python-fallback` que usa Python 3.
- Si los breakpoints aparecen como huecos grises, puede ser porque los archivos servidos no coinciden con las fuentes cargadas; asegúrate de que `webRoot` en `launch.json` sea `${workspaceFolder}`.

## Lecturas adicionales

- Documentación oficial de VS Code sobre depuración: https://code.visualstudio.com/docs/editor/debugging
- Artículo: "Debug code with Visual Studio Code" (resumen en este README).
# etch-a-sketch-dom

Proyecto de ejemplo: cuadrícula 16x16 generada dinámicamente con JavaScript y estilizada con Flexbox.

Archivos principales:

- `index.html` — contiene el contenedor `#gridContainer` y enlaza `styles.css` y `script.js`.
- `styles.css` — estilos para el contenedor y las celdas usando Flexbox.
- `script.js` — genera 256 `div.grid-cell` y añade interacciones (hover/click) y logs.

Cómo probarlo:

1. Abre `index.html` en tu navegador (doble clic o arrastrar al navegador).
2. Abre las herramientas de desarrollador (DevTools):
	- Consola: mira los mensajes `script.js cargado — generando cuadrícula 16x16` y `Se crearon 256 celdas...`.
	- Panel Elementos / Inspector: busca `#gridContainer` y debería contener 256 `div.grid-cell`.

Si la cuadrícula no aparece, comprueba lo siguiente:

- ¿Está enlazada la hoja de estilos? Revisa en el panel Elements que `styles.css` se haya cargado.
- ¿Hay errores en la consola de JavaScript? Si `script.js` no se carga, la consola mostrará un error.
- Margen/border/gap: Si cambias `gap`, `border` o `box-sizing`, los tamaños de las celdas pueden dejar de ser cuadrados.

Notas de desarrollo:

- El contenedor tiene tamaño fijo (640×640) para que las celdas calculadas con porcentajes sean exactamente cuadradas. Puedes cambiarlo en `styles.css`.
- Usamos Flexbox (flex-wrap) para practicar su comportamiento en filas y columnas. No se ha usado CSS Grid intencionalmente.

na implementación web del estilo Etch-A-Sketch / bloc de dibujo, construida con HTML, CSS y JavaScript. El objetivo principal es practicar y dominar la manipulación del DOM, la gestión de eventos y la generación dinámica de cuadrículas.
