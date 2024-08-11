const box = document.getElementById("box");

let topPosition = 0;
let leftPosition = 0;
let direction = { up: false, left: false };
const speed = 5; // You can increase this value

function moveBox() {
  const maxTop = window.innerHeight - box.offsetHeight;
  const maxLeft = window.innerWidth - box.offsetWidth;

  if (direction.up) {
    topPosition = Math.max(topPosition - speed, 0);
    leftPosition = direction.left
      ? Math.max(leftPosition - speed, 0)
      : Math.min(leftPosition + speed, maxLeft);
  } else {
    topPosition = Math.min(topPosition + speed, maxTop);
    leftPosition = direction.left
      ? Math.max(leftPosition - speed, 0)
      : Math.min(leftPosition + speed, maxLeft);
  }

  if (topPosition === 0 || topPosition === maxTop) direction.up = !direction.up;
  if (leftPosition === 0 || leftPosition === maxLeft)
    direction.left = !direction.left;

  box.style.top = topPosition + "px";
  box.style.left = leftPosition + "px";

  requestAnimationFrame(moveBox);
}

moveBox();
