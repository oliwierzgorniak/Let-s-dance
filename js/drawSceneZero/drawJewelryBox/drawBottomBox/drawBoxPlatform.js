function drawBoxPlatform() {
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
}
