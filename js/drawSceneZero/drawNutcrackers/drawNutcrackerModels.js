function drawNutcrackerModels() {
  push();
  fill(117, 81, 19);
  specularMaterial(117, 81, 19);

  push();
  rotateX(90);
  translate(
    NUTCRACKER_POSITION + nutcrackersOffset.x,
    BOTTOM_BOX_HEIGHT / 2 +
      WALL_THICKNESS / 2 +
      NUTCRACKER_APPROXIMATE_HEIGHT / 2 +
      platformLevelOffset -
      TOWER_CYLINDER_HEIGHT +
      nutcrackersOffset.y,
    ((BOX_DEPTH - WALL_THICKNESS * 2) / 2) * 0.7 + nutcrackersOffset.z
  );
  scale(NUTCRACKER_SCALE);
  rotateY(nutcrackersOffset.yRotation);
  rotateX(nutcrackersOffset.xRotation);
  rotateY(180);
  model(nutcrackerModel);
  pop();

  push();
  rotateX(90);
  translate(
    -NUTCRACKER_POSITION - nutcrackersOffset.x,
    BOTTOM_BOX_HEIGHT / 2 +
      WALL_THICKNESS / 2 +
      NUTCRACKER_APPROXIMATE_HEIGHT / 2 +
      platformLevelOffset -
      TOWER_CYLINDER_HEIGHT +
      nutcrackersOffset.y,
    ((BOX_DEPTH - WALL_THICKNESS * 2) / 2) * 0.7 + nutcrackersOffset.z
  );
  scale(NUTCRACKER_SCALE);
  rotateY(-nutcrackersOffset.yRotation);
  rotateX(nutcrackersOffset.xRotation);
  rotateY(180);
  model(nutcrackerModel);
  pop();

  pop();
}
