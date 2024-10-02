// Selecciona el elemento que representa el punto del cursor personalizado
const cursorDot = document.querySelector("[data-cursor-dot]");
// Selecciona el elemento que representa el contorno del cursor personalizado
const cursorOultine = document.querySelector("[data-cursor-outline]");

// Agrega un evento que escucha el movimiento del ratón
window.addEventListener("mousemove", function (e) {
  // Obtiene la posición X del ratón en relación con la ventana
  const posX = e.clientX;

  // Obtiene la posición Y del ratón en relación con la ventana
  const posY = e.clientY;

  // Actualiza la posición del punto del cursor personalizado
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Anima el contorno del cursor para que siga la posición del ratón
  cursorOultine.animate(
    {
      left: `${posX}px`, // Nueva posición X
      top: `${posY}px`, // Nueva posición X
    },
    { duration: 500, fill: "forwards" } // Duración de la animación y cómo se mantiene el estado final
  );
});
