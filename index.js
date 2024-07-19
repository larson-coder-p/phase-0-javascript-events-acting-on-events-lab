// Assuming your dodger element has the ID 'dodger'
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  // Get the current left position of the dodger and parse it as an integer
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  // Ensure the dodger doesn't move out of bounds
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  // Get the current left position of the dodger and parse it as an integer
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  // Ensure the dodger doesn't move out of bounds
  if (left < 360) { // Assuming the game area width is 400px and the dodger width is 40px
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listeners for the arrow keys to move the dodger
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

