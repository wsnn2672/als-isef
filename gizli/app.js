function keyboardPressed(i) {
  keyboardVisual(i);
}

function keyboardVisual(i) {
  const bipSes = new Audio("Assets/Sounds/beep.mp3");
  bipSes.play();

  const div = document.getElementById(`keyboardBtn${i}Back`);
  div.style.backgroundColor = "#FF9B00";

  setTimeout(() => {
    div.style.backgroundColor = "#7289da";
  }, 240);
}