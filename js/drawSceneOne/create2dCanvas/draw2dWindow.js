function draw2dWindow(sketch) {
  sketch.push();
  sketch.fill(130, 102, 0);
  sketch.noStroke();
  sketch.rect(0, 0, WINDOW_WIDTH, FRAME_THICKNESS);
  sketch.rect(
    0,
    WINDOW_HEIGHT / 2 - FRAME_THICKNESS / 2,
    WINDOW_WIDTH,
    FRAME_THICKNESS
  );
  sketch.rect(
    0,
    WINDOW_HEIGHT - FRAME_THICKNESS,
    WINDOW_WIDTH,
    FRAME_THICKNESS
  );

  sketch.rect(
    0,
    FRAME_THICKNESS,
    FRAME_THICKNESS,
    WINDOW_HEIGHT - 2 * FRAME_THICKNESS
  );
  sketch.rect(
    WINDOW_WIDTH / 2 - FRAME_THICKNESS / 2,
    FRAME_THICKNESS,
    FRAME_THICKNESS,
    WINDOW_HEIGHT - 2 * FRAME_THICKNESS
  );
  sketch.rect(
    WINDOW_WIDTH - FRAME_THICKNESS,
    FRAME_THICKNESS,
    FRAME_THICKNESS,
    WINDOW_HEIGHT - 2 * FRAME_THICKNESS
  );
  sketch.pop();
}
