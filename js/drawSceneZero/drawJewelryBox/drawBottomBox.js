function drawBottomBox() {
  push();
  fill(64, 43, 8);
  specularMaterial(64, 43, 8);

  push();
  translate(0, 0, BOTTOM_BOX_HEIGHT + TOP_BOX_HEIGHT / 2);
  translate(0, -BOX_DEPTH / 2, -TOP_BOX_HEIGHT / 2);
  rotateX(topBoxRotationAngel);
  translate(0, BOX_DEPTH / 2, TOP_BOX_HEIGHT / 2);
  box(BOX_WIDTH, BOX_DEPTH, TOP_BOX_HEIGHT);
  pop();

  push();
  fill(117, 81, 19);
  specularMaterial(117, 81, 19);
  translate(0, 0, BOTTOM_BOX_HEIGHT / 2 + platformLevelOffset);
  box(
    BOX_WIDTH - WALL_THICKNESS * 2,
    BOX_DEPTH - WALL_THICKNESS * 2,
    WALL_THICKNESS
  );
  pop();

  push();
  translate(0, BOX_DEPTH / 2 - WALL_THICKNESS / 2, BOTTOM_BOX_HEIGHT / 2);
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  push();
  translate(0, -(BOX_DEPTH / 2 - WALL_THICKNESS / 2), BOTTOM_BOX_HEIGHT / 2);
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  push();
  translate(-(BOX_WIDTH / 2 - WALL_THICKNESS / 2), 0, BOTTOM_BOX_HEIGHT / 2);
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();

  push();
  translate(BOX_WIDTH / 2 - WALL_THICKNESS / 2, 0, BOTTOM_BOX_HEIGHT / 2);
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT);
  pop();
  pop();

  drawBoxLock();
  drawBoxPanels();
}
