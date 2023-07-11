window.addEventListener("DOMContentLoaded", (event) => {
  const square = document.getElementById("square");
  const maxWidht = window.innerWidth - square.clientWidth;
  let direction = 1;
  let currentPosition = 0;

  function moveSquare() {
    currentPosition += direction;
    square.style.left = currentPosition + "px";

    if (currentPosition >= maxWidht || currentPosition <= 0) {
      direction *= -1;
    }

    requestAnimationFrame(moveSquare);
  }

  moveSquare();
});
