let wasReloaded = false;

function create2dCanvas() {
  let s2 = function (sketch) {
    sketch.setup = function () {
      sketch.createCanvas(640, 360);
      sketch.noStroke();

      let canvasElement = document.querySelector("canvas");
      canvasElement.style.opacity = "1";
    };

    sketch.draw = function () {
      // reloading the website after the animation is finished
      if (millis() - startTime >= 56000 && !wasReloaded) {
        location.reload();
        wasReloaded = true;
      }
      sketch.background(BACKGROUND_COLOR);

      handleSnowflakes(sketch);
      draw2dWindow(sketch);
    };
  };

  new p5(s2);
}
