let startButtonElement = document.querySelector('button');
startButtonElement.addEventListener('click', () => {
  song.play();

  let canvasElement = document.querySelector('canvas')
  canvasElement.style.opacity = '1';

  animationStarted = true;
  startTime = millis()
  
  let modalElement = startButtonElement.parentElement
  modalElement.remove()
})
