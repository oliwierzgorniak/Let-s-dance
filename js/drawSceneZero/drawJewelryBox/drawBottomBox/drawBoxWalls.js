function drawBoxWalls() {
  push();
  translate(0, BOX_DEPTH / 2 - WALL_THICKNESS / 2, BOTTOM_BOX_HEIGHT / 2);
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  push();
  translate(0, -(BOX_DEPTH / 2 - WALL_THICKNESS / 2), BOTTOM_BOX_HEIGHT / 2);
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  // side walls
  push();
  translate(-(BOX_WIDTH / 2 - WALL_THICKNESS / 2), 0, BOTTOM_BOX_HEIGHT / 2);
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  push();
  translate(BOX_WIDTH / 2 - WALL_THICKNESS / 2, 0, BOTTOM_BOX_HEIGHT / 2);
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();
}
